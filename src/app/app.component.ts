import { Component } from '@angular/core';
import {Person} from './person.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Aplication: Homework 1';
  author: string = 'Alejandro Betancourth';
  count: number =  0;
  imageSource = './../favicon.ico';
  enabled = false;

  alejo: Person;

  constructor() {
    this.alejo = new Person ('0', 'Alejandro Betancourth', 30);
  }

  add1() {
    this.count++;
  }
}
