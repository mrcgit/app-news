import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../model/news.types';
import { GalleryItemInterface } from '../features/components/gallery-item/gallery-item.model';


@Pipe({
  name: 'newsToGalleryItems',
  standalone: true
})
export class NewsToGalleryItemsPipe implements PipeTransform {

  transform(news: Article[] | undefined): GalleryItemInterface[] {
    if(news){
      return news.map((a: Article) => {
        return {
          title: a.title,
          imageUrl: a.og,
          url: a.link
        }
      });
    } else {
      return []
    }
  }
}
