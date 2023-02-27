import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway({cors: true})
export class ChatGateway {
  @WebSocketServer() server;

  handleConnection(client: any, ...args: any){
    console.log(`client ${client.id} connected`);
  }

  handledisconneted(client: any, ...args: any){
    console.log(`client ${client.id} disconneted`);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    const roomID = payload.roomID;
    console.log('message',payload);
    this.server.emit('message-'+ roomID, payload);
    return 'Hello world!';
  }
}
