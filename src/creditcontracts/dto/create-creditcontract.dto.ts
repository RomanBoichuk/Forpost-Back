import { ObjectId } from "mongoose";

export class CreateCreditcontractDto{
    readonly credit_sum: number;
    readonly credit_mounthTerm: number;
    readonly credit_percent: number;
    readonly clientId: ObjectId;
    // readonly client_phone: string
    // readonly PASSPORT: {
    //     passport_seria: string,
    //     passport_number: string,
    //     passport_authority: string,
    //     passport_issueDate: string
    // }
    // readonly registrationPlace_zipCode: string
}