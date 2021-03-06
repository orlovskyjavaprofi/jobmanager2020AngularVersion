import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from '../../app/services/auth-service.service';

describe('AuthServiceService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created auth service', () => {
    expect(service).toBeTruthy();
  });
});
