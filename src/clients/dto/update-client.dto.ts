export class UpdateClientDto{
    readonly client_firstName: string;
    readonly client_name: string;
    readonly client_surname: string;
    readonly ipn: string;
    readonly birthday: string;
    readonly place_birth: string;
    readonly passport: {
        seria: string,
        passport_number: string,
        passport_authority: string,
        issue_date: string
    }
}