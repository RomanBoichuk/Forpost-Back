import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
	origin: '*',
  },
})

export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('EventsGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): void {
	this.server.emit('msgToClient', payload);
  }

  afterInit(server: Server) {
	this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
	this.logger.log(`Client disconnected: ${client.id}`);
  }

	// tslint:disable-next-line:no-any
  handleConnection(client: Socket, ...args: any[]) {
	this.logger.log(`Client connected: ${client.id}`);
  }
}