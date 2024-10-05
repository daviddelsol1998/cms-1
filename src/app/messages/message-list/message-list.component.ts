import { Component } from '@angular/core';
import { Message } from "../MessageModel"; // Import the Message class
import { MessageItemComponent } from "../message-item/message-item.component";
import { MessageEditComponent } from "../message-edit/message-edit.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [MessageItemComponent, MessageEditComponent, NgFor],
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  messages: Message[] = [
    new Message(1, 'Hello', 'How are you?', 'Alice'),
    new Message(2, 'Greetings', 'I am fine, thank you!', 'Bob'),
    new Message(3, 'Question', 'What about you?', 'Alice')
  ];

  onAddMessage(message: Message) {
    const newMessage = new Message((this.messages.length + 1), message.subject, message.msgText, message.sender);
    this.messages.push(newMessage);
  }
}
