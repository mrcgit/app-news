import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageServiceEvent } from './message.service.types';

@Injectable({
  providedIn: 'root'
})
/**
 * Creiamo un servizio per scambiare dati/eventi tra componenti non legati da parentela padre/figlio
 * In quel caso infatti avremmo usato un parametro @Output eventEmitter = new EventEmitter();
 * lanciato un evento in un metodo bindato ad un evento del figlio con eventEmitter.emit(...)
 * E ascoltato l'evento sul padre aggiungendo un parametro in input sul tag del figlio così
 * <childComponent (eventoLanciatoDalFiglio)=doSomethingSulPadre()></childComponent>
 * 
 * Questo servizio invece sfrutta gli Observable e un service per scrivere messaggi e sottoscriverli
 * Il padre potrà usare gli operatori RXJS per elaborare i dati/filtrarli/convertirli ecc...
 */
export class MessageService {

  private messageSource = new BehaviorSubject<MessageServiceEvent>({eventName: ''});
  
  currentMessageObs = this.messageSource.asObservable();

  changeMessage(newMessage: MessageServiceEvent<any>) {
    this.messageSource.next(newMessage);
  }
}


