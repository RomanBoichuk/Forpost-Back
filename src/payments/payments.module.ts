import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Creditcontract, CreditcontractSchema } from "src/creditcontracts/schemas/creditcontract.schema";
import { PaymentsCotroller } from "./payments.controller";
import { PaymentsService } from "./payments.service";
import { Payment, PaymentSchema } from "./schemas/payment.schemas";

@Module({
    providers: [PaymentsService],
    controllers: [PaymentsCotroller],
    imports: [
        MongooseModule.forFeature([
            { name: Payment.name, schema: PaymentSchema },
            { name: Creditcontract.name, schema: CreditcontractSchema }
        ])
    ],
    exports: [PaymentsService],
})
export class PaymentsModule{}