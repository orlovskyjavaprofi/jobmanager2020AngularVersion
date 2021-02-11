import { Injectable } from '@angular/core';
import { UserEmailDetails } from '../shared/model/useremaildetails';
import { UserJobApplications } from '../shared/model/userjobapplications';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  private nodemailerMessage = '';
  validateIfEmailTopicAndBodyNotEmpty(
    inputEmailTopic: string,
    inputEmailBodyMessage: string
  ): boolean {
    let validationResult: boolean = false;

    if (inputEmailTopic !== undefined && inputEmailBodyMessage !== undefined) {
      if (inputEmailTopic.length > 9 && inputEmailBodyMessage.length > 20) {
        validationResult = true;
      }
    }

    return validationResult;
  }

  validateUserPdfFile(userInputFile: File): boolean {
    let validationResult: boolean = false;

    if (userInputFile !== undefined) {
      validationResult = true;
    }

    return validationResult;
  }

  public sendEmailToNodeMailer(
    userInputForJobAppl: UserJobApplications,
    inputForCompanyName: string
  ): boolean {
    let userEmailDetails: UserEmailDetails = userInputForJobAppl.findEmailDetailsByCompanyName(
      inputForCompanyName
    );
    let finalResult: boolean = false;
    //this service should be able to read emailsmtpsettingsservice which is stored in the inmemdb , because it should have no global config , but rather
    //each user have own configuration which you need to set up
    const emailClientSettings = {
      host: '127.0.0.1',
      port: 100,
    };

    let email = {
      from: 'testseder@nospam.com',
      to: userInputForJobAppl.getUserEmailLogin(),
      subject: userEmailDetails.getUserEmailTopic(),
      text: userEmailDetails.getUserEmailBodyText(),
      attachments: [
        {
          filename: userEmailDetails.getUserEmailFileAttachment().name,
          content: userEmailDetails.getUserEmailFileAttachment(),
          contentType: userEmailDetails.getUserEmailFileAttachment().type,
        },
      ],
    };

    let validateEmailClientSettings: boolean = Object.is(
      emailClientSettings.host.length > 8 && emailClientSettings.port > 0,
      true
    );
    let validateEmail: boolean = Object.is(
      email.from === 'testseder@nospam.com' &&
        email.to.length > 0 &&
        email.subject.length > 0 &&
        email.text.length > 0 &&
        email.attachments[0].contentType === 'application/pdf',
      true
    );

    if (validateEmailClientSettings === true && validateEmail === true) {
      //here must follow nodemail implementation! or call to service which get hold of mail service
      finalResult = true;
    }

    return finalResult;
  }
}
