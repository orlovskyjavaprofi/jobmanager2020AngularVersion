import { TestBed } from '@angular/core/testing';

import { CompanymessagesmanagerService } from '../../app/services/companymessagesmanager.service';

describe('CompanymessagesmanagerService', () => {
  let service: CompanymessagesmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanymessagesmanagerService);
  });

  it('should be created a company messages manager', () => {
    expect(service).toBeTruthy();
  });
});
