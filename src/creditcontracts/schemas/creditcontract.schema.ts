import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose'
import { HydratedDocument } from 'mongoose';
import { Client } from "src/clients/schemas/client.schema";
import { Payment } from "src/payments/schemas/payment.schemas";

export type CreditcontractDocument = HydratedDocument<Creditcontract>

@Schema()
export class Creditcontract {

    @Prop() contract_number: string
    @Prop() credit_sum: number
    @Prop() credit_mounthTerm: number
    @Prop() credit_percent: number
    @Prop() month_credit_payment: number
    @Prop() month_credit_percent: number
    @Prop() payment: number
    @Prop() create_aplication_date: number
    @Prop() credit_dayTerm: number
    @Prop() credit_contract_end_date: number
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
    client: Client
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref:'Payment'}] })
    payments: Payment[]
}
export const CreditcontractSchema = SchemaFactory.createForClass(Creditcontract)