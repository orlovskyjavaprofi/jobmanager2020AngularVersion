import { TestBed } from '@angular/core/testing';

import { AccountServiceService } from '../../app/services/account-service.service';

describe('AccountServiceService', () => {
  let service: AccountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
