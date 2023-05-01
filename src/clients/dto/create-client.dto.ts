export class CreateClientDto{
    readonly client_firstName: string;
    readonly client_secondName: string;
    readonly client_surName: string;
    readonly client_IPN: string;
    readonly client_birthday: string;
    readonly client_birthdayPlace: string;
    readonly client_phone: string
    readonly PASSPORT: {
        passport_seria: string,
        passport_number: string,
        passport_authority: string,
        passport_issueDate: string
    }
    readonly registrationPlace_zipCode: string
    readonly registrationPlace_region: string
    readonly registrationPlace_district: string
    readonly registrationPlace_city: string
    readonly registrationPlace_street: string
    readonly registrationPlace_house: string
    readonly registrationPlace_corps: string
    readonly registrationPlace_room: string
    readonly residencePlace_zipCode: string
    readonly residencePlace_region: string
    readonly residencePlace_district: string
    readonly residencePlace_city: string
    readonly residencePlace_street: string
    readonly residencePlace_house: string
    readonly residencePlace_corps: string
    readonly residencePlace_room: string
    readonly contactPhone_personOne: string
    readonly contactPhone_personTwo: string
    readonly contactPhone_personThree: string
    readonly contactPhone_one: string
    readonly contactPhone_two: string
    readonly contactPhone_three: string
    readonly jobName: string
    readonly jobPosition: string
    readonly jobAdress_zipCode: string
    readonly jobAdress_region: string
    readonly jobAdress_district: string
    readonly jobAdress_city: string
    readonly jobAdress_street: string
    readonly jobAdress_house: string
    readonly jobAdress_corps: string
    readonly jobAdress_room: string
}