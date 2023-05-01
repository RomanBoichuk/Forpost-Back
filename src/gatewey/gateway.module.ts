import { Module } from "@nestjs/common";
import { PaymentsModule } from "src/payments/payments.module";
import { MyGatewey } from "./gatewey";

@Module({
    imports: [PaymentsModule],
    providers: [MyGatewey,]
})
export class GateweyModule {}