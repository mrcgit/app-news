import { Component, Input, inject } from '@angular/core';
import { CardEventType, CarouselCardInterface } from './card.model';
import { MessageService } from '../../../services/message.service';
import { MessageServiceEvent } from '../../../services/message.service.types';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item: CarouselCardInterface | undefined = undefined;

  messageService = inject(MessageService);
  
  onClick() {
    const message: MessageServiceEvent<CarouselCardInterface> = {eventName: CardEventType.click, payload: this.item};
    this.messageService.changeMessage(message);
  }

}
