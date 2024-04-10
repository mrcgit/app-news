import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedComponent } from "./features/components/feed/feed.component";
import { NavbarComponent } from "./features/components/navbar/navbar.component";
import { SpinnerComponent } from "./features/components/spinner/spinner.component";
import { CaroselloComponent } from "./features/components/carosello/carosello.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FeedComponent, NavbarComponent, SpinnerComponent, CaroselloComponent]
})
export class AppComponent {
  title = 'app-news';
}
// npx -p @angular/cli@latest ng serve