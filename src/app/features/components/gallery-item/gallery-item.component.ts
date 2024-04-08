import { Component,  Input, inject,  } from '@angular/core';

import { CommonModule } from '@angular/common'
import { EnfasizeOnOverDirective } from '../../../core/hide-on-over.directive';
import { MessageService } from '../../../services/message.service';
import { GalleryItemEventType, GalleryItemInterface } from './gallery-item.model';
import { MessageServiceEvent } from '../../../services/message.service.types';



@Component({
  selector: 'app-gallery-item',
  standalone: true,
  imports: [CommonModule, EnfasizeOnOverDirective],
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.css'
})
export class GalleryItemComponent {

  @Input() item!: GalleryItemInterface;

  messageService = inject(MessageService);
  
  onClick() {
    const message: MessageServiceEvent<GalleryItemInterface> = {eventName: GalleryItemEventType.click, payload: this.item};
    this.messageService.changeMessage(message);
  }
  


}
