import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { CreditcontractModule } from './creditcontracts/creditcontracts.module';
import { GateweyModule } from './gatewey/gateway.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [GateweyModule,
            ClientsModule,
            CreditcontractModule,
            PaymentsModule,
            MongooseModule.forRoot('mongodb://localhost:27017/forpost')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
