import { Component, OnDestroy, OnInit, WritableSignal, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NewsActions } from '../../../store/news/news.actions';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { selectNews } from '../../../store/news/news.selectors';
import { SectionType } from '../../../model/news.types';
import { NewsToGalleryItemsPipe } from "../../../core/news-to-gallery-items.pipe";
import { MessageService } from '../../../services/message.service';
import { Subscription, filter } from 'rxjs';
import { GalleryItemEventType } from '../../components/gallery-item/gallery-item.model';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [GalleryComponent, NewsToGalleryItemsPipe]
})
export class HomeComponent implements OnInit, OnDestroy {
store = inject(Store);
messageService = inject(MessageService);

// Create a Subscription object o unsubscribe the related Observable on destroy 
subscripion: Subscription | undefined;


section:  WritableSignal<SectionType>= signal('World');

newsSection$ = this.store.selectSignal(selectNews);


getNews(){
  return computed(()=>{
    return this.newsSection$()[this.section()]
  })
}
  constructor(private route: ActivatedRoute){
    // To extract route param value
    this.route.paramMap.subscribe(
      (params)=> {
        let name = params.get('section')
        console.log(name);
        if(name){
          // update section
          this.section.set(name as SectionType);
          this.store.dispatch(NewsActions.loadSectionsNews({payload: name}))
        } else {
          console.error("Errore recupero delle sezioni")
        }
      }
    )
  }


  ngOnInit() {
    //Subscribe the message written by onother component on the service observable
    this.subscripion = this.messageService.currentMessageObs
    .pipe(filter(msg => msg.eventName === GalleryItemEventType.click))
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
