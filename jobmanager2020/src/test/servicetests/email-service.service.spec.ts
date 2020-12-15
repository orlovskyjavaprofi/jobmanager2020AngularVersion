import { TestBed } from '@angular/core/testing';

import { EmailServiceService } from '../../app/services/email-service.service';

describe('EmailServiceService', () => {
  let service: EmailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailServiceService);
  });

  it('should be created email service', () => {
    expect(service).toBeTruthy();
  });
});
