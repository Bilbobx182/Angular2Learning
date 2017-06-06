import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './components/about/about.component';
import {NewsComponent} from './components/news/news.component';
import {DoggoComponent} from './components/doggo/doggo.component';

export const router: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: 'doggo', component: DoggoComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
