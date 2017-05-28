import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ciaran is cool';
  activeLetter: string;

  changeLetter() {
    this.activeLetter = this.title;
  }

}
