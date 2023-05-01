import { ObjectId } from "mongoose";

export class CreatePaymentDto {
    readonly payment_date: string;
    readonly payment_client: string;
    readonly peyment_clientIPN: string;
    readonly payment_clientCreditAсcount: string;
    readonly payment_recipientAсcount: string;
    readonly payment_amount: number;
    readonly payment_purpose: string;
    readonly contractId: ObjectId;
}