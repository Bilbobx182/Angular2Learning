import {Component} from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css']
})

export class EntryComponent {
  title = 'His name is Cosmo';
  photo = 'http://i.imgur.com/ZuUrzGW.jpg';
  description = 'My little doggo';

  comments: any[] = [
    {name: 'Mark', comment: ' Ciaran your dog looks dope'},
    {name: 'Bill', comment: ' Good doggo'},
  ];
}
