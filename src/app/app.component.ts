import { Person } from './person.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alejo: Person;

  constructor(){
    this.alejo = new Person('1', 'Alejandro B', 30);

  }

}
