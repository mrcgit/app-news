import { Pipe, PipeTransform } from '@angular/core';
import { CarouselCardInterface } from '../features/components/card/card.model';
import { Article } from '../model/news.types';

@Pipe({
  name: 'newsToCarouselCards',
  standalone: true
})
export class NewsToCarouselCardsPipe implements PipeTransform {

  transform(news: Article[] | undefined): CarouselCardInterface[] {
    if(news){
      return news.map((a: Article) => {
        return {
          title: a.title,
          imageUrl: a.og,
          url: a.link,
          source: a.source
        }
      });
    } else {
      return []
    }
  }

}
