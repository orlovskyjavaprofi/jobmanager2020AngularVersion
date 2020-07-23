import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './welcomecomponent.component.html',
  styleUrls: ['./welcomecomponent.component.css'],
})
export class WelcomecomponentComponent implements OnInit {
  title = 'Job manager 2020';
  constructor() {}

  ngOnInit(): void {}
}
