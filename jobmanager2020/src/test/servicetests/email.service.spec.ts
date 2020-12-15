import { TestBed } from '@angular/core/testing';

import { EmailService } from '../../app/services/email.service';

describe('EmailService', () => {
  let service: EmailService;
  let emailtopic: string;
  let emailbody: string;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailService);
  });

  it('should be created email service', () => {
    expect(service).toBeTruthy();
  });

  it('case: validate email topic and body text', () => {
    expect(
      service.validateIfEmailTopicAndBodyNotEmpty(emailtopic, emailbody)
    ).toBeFalsy();
  });
});
