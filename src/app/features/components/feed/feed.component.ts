import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { NewsActions } from '../../../store/news/news.actions';


@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {

  store = inject(Store)


  ngOnInit(): void {
    this.store.dispatch(NewsActions.loadFeedNews())
  }

}
