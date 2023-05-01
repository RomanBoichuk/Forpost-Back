import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
import { PaymentsService } from 'src/payments/payments.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MyGatewey implements OnModuleInit {
  @WebSocketServer()
  server: Server

  constructor(private readonly paymentsServise: PaymentsService) {
    }

  onModuleInit() {
    this.server.on("connection", async (socket) => {
      const dataSocket = await this.paymentsServise.getAll()
      this.server.emit('paymentsToClient', dataSocket)
    })
  }
  
  // @SubscribeMessage('newMessage')
  // async onNewMessage(@MessageBody() body: any) {
  //   console.log(body);
  //   const dataSocket = await this.paymentsServise.getAll()
  //   console.log(dataSocket)
  //   console.log(dataSocket, 11111111)
  //   this.server.emit('paymentsToClient1', dataSocket)
  // }

  @SubscribeMessage('paymentToServer')
  async onNewMessage(@MessageBody() body: any) {
    const dataSocket = await this.paymentsServise.getAll()
    this.server.emit('paymentsToClient', dataSocket)
  }
 
}