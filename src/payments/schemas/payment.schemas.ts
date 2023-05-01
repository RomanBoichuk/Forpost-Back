import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose'
import { HydratedDocument } from 'mongoose';
import { Creditcontract } from "src/creditcontracts/schemas/creditcontract.schema";

export type PaymentDocument = HydratedDocument<Payment>

@Schema()
export class Payment {

    @Prop() payment_date: string;
    @Prop() payment_client: string;
    @Prop() peyment_clientIPN: string;
    @Prop() payment_clientCreditAсcount: string;
    @Prop() payment_recipientAсcount: string;
    @Prop() payment_amount: number;
    @Prop() payment_purpose: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Creditcontract' })
    credit_contracts: Creditcontract
}
export const PaymentSchema = SchemaFactory.createForClass(Payment)