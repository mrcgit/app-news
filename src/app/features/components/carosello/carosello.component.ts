import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-carousel',
    standalone: true,
    templateUrl: './carosello.component.html',
    styleUrl: './carosello.component.css',
    imports: [CardComponent]
})
export class CaroselloComponent {
  cards = []

}
