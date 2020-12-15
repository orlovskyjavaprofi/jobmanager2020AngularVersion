import { TestBed } from '@angular/core/testing';

import { EmailService } from '../../app/services/email.service';
import fs from 'fs';
describe('EmailService', () => {
  let service: EmailService;
  let emailtopic: string;
  let emailbody: string;
  let userfile: File;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailService);
  });

  it('should be created email service', () => {
    expect(service).toBeTruthy();
  });

  it('case: validate email topic and body text both inpus invalid', () => {
    expect(
      service.validateIfEmailTopicAndBodyNotEmpty(emailtopic, emailbody)
    ).toBeFalsy();
  });

  it('case: validate email topic and body text both inpus valid', () => {
    emailtopic = 'application as software developer';
    emailbody = 'this is a simple test';
    expect(
      service.validateIfEmailTopicAndBodyNotEmpty(emailtopic, emailbody)
    ).toBeTruthy();
  });

  it('case: validate that provided file is not a valid file', () => {
    expect(service.validateUserPdfFile(userfile)).toBeFalsy();
  });

  it('case: validate that provided file is a file', () => {
    try {
      const data = fs.readFileSync('src/test/testassets/testdocument.pdf');

      /*
     This code only need for manual verfifcation
    fs.writeFile('src/test/testassets/res.pdf', data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });*/

      userfile = new File([data], 'testdocument.pdf', {
        type: 'application/pdf',
      });

      expect(service.validateUserPdfFile(userfile)).toBeTruthy();
    } catch (err) {
      console.error(err);
    }
  });
});
