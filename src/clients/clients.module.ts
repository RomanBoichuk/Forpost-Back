import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ClientsCotroller } from "./clients.controller";
import { ClientsService } from "./clients.service";
import { Client, ClientSchema } from "./schemas/client.schema";

@Module({
    providers: [ClientsService],
    controllers: [ClientsCotroller],
    imports: [
        MongooseModule.forFeature([
            { name: Client.name, schema: ClientSchema }
        ])
    ]
})
export class ClientsModule{}