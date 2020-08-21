import { TestBed } from '@angular/core/testing';

import { AuthService } from '../../app/services/auth-service.service';

describe('AuthServiceService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created atuh service', () => {
    expect(service).toBeTruthy();
  });
});
