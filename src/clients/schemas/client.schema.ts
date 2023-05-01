import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose'
import { HydratedDocument } from 'mongoose';
import { Creditcontract } from "src/creditcontracts/schemas/creditcontract.schema";

export type ClientDocument = HydratedDocument<Client>

@Schema()
export class Client {

    @Prop() client_firstName: string
    @Prop() client_secondName: string
    @Prop() client_surName: string
    @Prop() client_IPN: string
    @Prop() client_birthday: string
    @Prop() client_birthdayPlace: string
    @Prop() client_phone: string
    @Prop(raw({
        passport_seria: { type: String },
        passport_number: { type: String },
        passport_authority: { type: String },
        passport_issueDate: { type: String }
    }))
    PASSPORT: Record<string, any>
    @Prop() registrationPlace_zipCode: string
    @Prop() registrationPlace_region: string
    @Prop() registrationPlace_district: string
    @Prop() registrationPlace_city: string
    @Prop() registrationPlace_street: string
    @Prop() registrationPlace_house: string
    @Prop() registrationPlace_corps: string
    @Prop() registrationPlace_room: string
    @Prop() residencePlace_zipCode: string
    @Prop() residencePlace_region: string
    @Prop() residencePlace_district: string
    @Prop() residencePlace_city: string
    @Prop() residencePlace_street: string
    @Prop() residencePlace_house: string
    @Prop() residencePlace_corps: string
    @Prop() residencePlace_room: string
    @Prop() contactPhone_personOne: string
    @Prop() contactPhone_personTwo: string
    @Prop() contactPhone_personThree: string
    @Prop() contactPhone_one: string
    @Prop() contactPhone_two: string
    @Prop() contactPhone_three: string
    @Prop() jobName: string
    @Prop() jobPosition: string
    @Prop() jobAdress_zipCode: string
    @Prop() jobAdress_region: string
    @Prop() jobAdress_district: string
    @Prop() jobAdress_city: string
    @Prop() jobAdress_street: string
    @Prop() jobAdress_house: string
    @Prop() jobAdress_corps: string
    @Prop() jobAdress_room: string
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref:'Creditcontract'}] })
    credit_contracts: Creditcontract[]

}
export const ClientSchema = SchemaFactory.createForClass(Client)