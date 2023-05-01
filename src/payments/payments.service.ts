import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Creditcontract, CreditcontractDocument } from "src/creditcontracts/schemas/creditcontract.schema";

import { CreatePaymentDto } from "./dto/create-payment.dto";
import { Payment, PaymentDocument } from "./schemas/payment.schemas";

@Injectable()
export class PaymentsService {
    constructor(@InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
                @InjectModel(Creditcontract.name) private creditcontractModel: Model<CreditcontractDocument>) { }
    
    async getAll(): Promise<Payment[]> {
        return this.paymentModel.find().exec()
    }

    async getById(id: string): Promise<Payment> {
        return this.paymentModel.findById(id)
    }

    async create(paymentDto: CreatePaymentDto): Promise<Payment> {
        const contract = await this.creditcontractModel.findById(paymentDto.contractId)
        const newPayment = new this.paymentModel({ ...paymentDto, credit_contracts: contract.id })
        contract.payments.push(newPayment.id)
        await contract.save()
        return newPayment.save()
    }

    async remove(id: string): Promise<Payment> {
        return this.paymentModel.findByIdAndRemove(id)
    }
}