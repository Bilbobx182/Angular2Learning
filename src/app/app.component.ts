import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navbarcontents: any[] = [
    {name: 'news', detail: ' News'},
    {name: 'about', detail: ' About and Information'},
    {name: 'doggo', detail: 'doggo'},
  ];
}
