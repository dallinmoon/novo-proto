import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'body',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor( private http: HttpClient ) { //dependency injection, creating an instance of HttpClient called http

  }
}
