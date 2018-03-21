import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface DataResponse {
  rows: any;
  firstname: string;
  lastname: string;
}

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  title = 'app';
  myData: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
