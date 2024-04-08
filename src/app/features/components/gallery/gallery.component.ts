import { Component, Input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

import { GalleryItemComponent } from "../gallery-item/gallery-item.component";
import { GalleryItemInterface } from '../gallery-item/gallery-item.model';

@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.css',
    imports: [MatGridListModule, GalleryItemComponent]
})
export class GalleryComponent {
  @Input("items") items: GalleryItemInterface[] | undefined = [];
  

  constructor(){
    console.log('gallery works!')
  }


}
