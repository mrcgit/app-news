import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { NewsSections } from '../model/news.types';
import { NEWS_FEED, NEWS_SECTIONS, NEWS_SECTIONS_NAMES, NEWS_SECTIONS_PARAMS } from '../apis/endpoints';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { 
  }

  getNewsFeed(): Observable<NewsSections>{
   return this.http.get<NewsSections>(NEWS_FEED.url);
  }

  getSectionsNames(): Observable<string[]>{
   return this.http.get<string[]>(NEWS_SECTIONS_NAMES.url);
  }

  getNewsBySections(bodyRequest: NEWS_SECTIONS_PARAMS["payload"]): Observable<NewsSections>{
    return this.http.post<NewsSections>(NEWS_SECTIONS.url, bodyRequest )
  }
}
