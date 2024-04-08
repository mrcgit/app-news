import { Component, OnInit, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSectionNames } from '../../../store/news/news.selectors';
import { NewsActions } from '../../../store/news/news.actions';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatIconModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  store = inject(Store);
  sections$ = this.store.selectSignal(selectSectionNames);
  
  ngOnInit(): void {
   this.store.dispatch(NewsActions.loadSectionsNames());
  }

  getSections(){
    return computed(() =>this.sections$());
  }

  getUrl(section: string){
    return "home/"+section
  }

}
