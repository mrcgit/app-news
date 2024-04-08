import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'home/:section', loadComponent: () => import('./features/pages/home/home.component').then((x)=> x.HomeComponent) },

    { path: '', redirectTo: 'home', pathMatch: 'full'}
  ];
  
