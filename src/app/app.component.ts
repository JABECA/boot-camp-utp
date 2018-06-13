import { Component } from '@angular/core';

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

  add1() {
    this.count++;
  }
}
