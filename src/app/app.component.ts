import { Component, WritableSignal, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedComponent } from "./features/components/feed/feed.component";
import { NavbarComponent } from "./features/components/navbar/navbar.component";
import { SpinnerComponent } from "./features/components/spinner/spinner.component";
import { CaroselloComponent } from "./features/components/carosello/carosello.component";
import { SectionType } from './model/news.types';
import { selectFeeds, selectNews } from './store/news/news.selectors';
import { Store } from '@ngrx/store';
import { NewsToCarouselCardsPipe } from "./core/news-to-carousel-cards.pipe";
import { NewsActions } from './store/news/news.actions';
import { Subscription, filter } from 'rxjs';
import { MessageService } from './services/message.service';
import { CardEventType } from './features/components/card/card.model';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FeedComponent, NavbarComponent, SpinnerComponent, CaroselloComponent, NewsToCarouselCardsPipe]
})
export class AppComponent {
  title = 'app-news';

  store = inject(Store);
  messageService = inject(MessageService);

  feedSection$ = this.store.selectSignal(selectFeeds);

  // Create a Subscription object to unsubscribe the related Observable on destroy 
  subscripion: Subscription | undefined;

  constructor(){
    this.store.dispatch(NewsActions.loadFeedNews())
  }

  getCards(){
    return computed(()=>{
      return this.feedSection$().World
    })()
  }

  ngOnInit() {
    //Subscribe the message written by onother component on the service observable
    this.subscripion = this.messageService.currentMessageObs
    .pipe(filter(msg => msg.eventName === CardEventType.click))
    .subscribe((message) => {
      // 
      if('url' in message.payload!){
        window.open(message.payload.url as string)
      }
    });
  }
  
  ngOnDestroy(){
    // Remember to unsubscribe the Subscription
    this.subscripion?.unsubscribe();
  }


}
// npx -p @angular/cli@latest ng serve