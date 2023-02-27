import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ChatModel } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket:Socket) { }

  getMessageByRoomId(roomID: string){
    const channel = 'message-' + roomID;
    return this.socket.fromEvent(channel);
  }
  sendMessageByRoom(data: ChatModel){
    this.socket.emit('message',data);
  }
}
