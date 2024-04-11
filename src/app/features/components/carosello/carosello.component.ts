import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from "../card/card.component";
import { CarouselCardInterface } from '../card/card.model';

@Component({
    selector: 'app-carousel',
    standalone: true,
    templateUrl: './carosello.component.html',
    styleUrl: './carosello.component.css',
    imports: [MatButtonModule, MatDividerModule, MatIconModule, CardComponent]
})
export class CaroselloComponent {
  @Input("cards") cards: CarouselCardInterface[] | undefined = [];
  
  private scroll = 800;
  


  scrollRight(): void {
    const parentElement = document.getElementsByClassName('carousel-container')[0];
    parentElement!.scrollLeft += this.scroll; // Scroll to the specified position
    this.scroll += 800; // Increment the scroll position
  }

  scrollLeft(): void {
    const parentElement = document.getElementsByClassName('carousel-container')[0];
    parentElement!.scrollLeft -= this.scroll; // Scroll to the specified position
    this.scroll -= 800; // Increment the scroll position
  }

  canScrollRight(): boolean{
    const parentElement = document.getElementsByClassName('carousel-container')[0];
    return parentElement!.scrollWidth > this.scroll;
  }

  canScrollLeft(): boolean{
    return this.scroll > 800;
  }
}


