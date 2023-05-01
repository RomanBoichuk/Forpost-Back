import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Client, ClientSchema } from "src/clients/schemas/client.schema";
import { CreditcontractsController } from "./creditcontracts.controller";
import { CreditcontractsServise } from "./creditcontracts.service";
import { Creditcontract, CreditcontractSchema } from "./schemas/creditcontract.schema";

@Module({
    providers: [CreditcontractsServise],
    controllers: [CreditcontractsController],
    imports: [
        MongooseModule.forFeature([
            { name: Creditcontract.name, schema: CreditcontractSchema },
            { name: Client.name, schema: ClientSchema }
        ])
    ]
})

export class CreditcontractModule{}