import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Client, ClientDocument } from "src/clients/schemas/client.schema";
import { CreateCreditcontractDto } from "./dto/create-creditcontract.dto";
import { Creditcontract, CreditcontractDocument } from "./schemas/creditcontract.schema";

@Injectable()
export class CreditcontractsServise {
    constructor(@InjectModel(Creditcontract.name) private creditcontractModel: Model<CreditcontractDocument>,
                @InjectModel(Client.name) private clientModel: Model<ClientDocument>) { }
    
    async getAll(): Promise<Creditcontract[]> {
        return this.creditcontractModel.find().populate('client').exec()
    }

    async getById(id: string): Promise<Creditcontract> {
        return this.creditcontractModel.findById(id)
    }

    async remove(id: string): Promise<Creditcontract> {
        return this.creditcontractModel.findByIdAndRemove(id)
    }

    async create(creditcontractDto: CreateCreditcontractDto): Promise<Creditcontract> {
        const allContracts = this.creditcontractModel.find()
        const createCreditAplicationDate: any = new Date()
        let contractEndDate: any = new Date()
        contractEndDate.setMonth(contractEndDate.getMonth() + creditcontractDto.credit_mounthTerm)
        const creditDayTerm = Math.round((contractEndDate - createCreditAplicationDate) / 86400000) + 1
        const contractNumber = 'F' + ((await allContracts).length + 1)
        const monthCreditPayment = Math.ceil(creditcontractDto.credit_sum / creditcontractDto.credit_mounthTerm)
        const monthCreditPercent = (creditcontractDto.credit_sum * creditcontractDto.credit_percent) / 100
        const Payment = monthCreditPayment + monthCreditPercent
        const clients = await this.clientModel.findById(creditcontractDto.clientId)
        const newCreditContract = new this.creditcontractModel
            ({ ...creditcontractDto,
                contract_number: contractNumber,
                month_credit_payment: monthCreditPayment,
                month_credit_percent: monthCreditPercent,
                payment: Payment,
                create_aplication_date: createCreditAplicationDate,
                credit_dayTerm:creditDayTerm,
                credit_contract_end_date: contractEndDate
            })
        clients.credit_contracts.push(newCreditContract.id)
        newCreditContract.client = clients.id
        await clients.save()
        return newCreditContract.save()
    }
}