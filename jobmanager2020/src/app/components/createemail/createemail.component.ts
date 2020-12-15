import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  templateUrl: './createemail.component.html',
  styleUrls: ['./createemail.component.css'],
})
export class CreateemailComponent implements OnInit {
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  sendEmail(emailTopic: string, emailBodyMessage: string): boolean {
    let emailsendresult: boolean = false;
    let validationResultFromEmailService = this.emailService.validateIfEmailTopicAndBodyNotEmpty(
      emailTopic,
      emailBodyMessage
    );

    if (validationResultFromEmailService === true) {
      emailsendresult = true;
    }

    return emailsendresult;
  }
}
