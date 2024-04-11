import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-carousel',
    standalone: true,
    templateUrl: './carosello.component.html',
    styleUrl: './carosello.component.css',
    imports: [MatButtonModule, MatDividerModule, MatIconModule, CardComponent]
})
export class CaroselloComponent {
  cards = []
  clicks = 800;



  scrollRight(): void {
    const parentElement = document.getElementsByClassName('container')[0];
    parentElement!.scrollLeft += this.clicks; // Scroll to the specified position
    this.clicks += 800; // Increment the scroll position
  }

  scrollLeft(): void {
    const parentElement = document.getElementsByClassName('container')[0];
    parentElement!.scrollLeft -= this.clicks; // Scroll to the specified position
    this.clicks -= 800; // Increment the scroll position
  }

  isIconRightVisible(){
    const parentElement = document.getElementsByClassName('container')[0];
    return parentElement!.scrollWidth > this.clicks;
  }
}


