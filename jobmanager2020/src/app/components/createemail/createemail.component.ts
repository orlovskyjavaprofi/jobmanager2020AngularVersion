import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './createemail.component.html',
  styleUrls: ['./createemail.component.css']
})
export class CreateemailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(emailTopic: string, emailBodyMessage: string): boolean{
     let emailsendresult: boolean = false;

     // check the length of emailTopic and emailBodyMessage

     return emailsendresult;
  }

}
