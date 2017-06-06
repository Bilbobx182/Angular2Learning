import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {EntryListComponent, EntryComponent} from './entries';
import {routes} from './app.router';
import {FormsModule} from '@angular/forms';
import {NewsComponent} from './components/news/news.component';
import {AboutComponent} from './components/about/about.component';
import { DoggoComponent } from './components/doggo/doggo.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routes,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EntryComponent,
    EntryListComponent,
    NewsComponent,
    AboutComponent,
    DoggoComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
