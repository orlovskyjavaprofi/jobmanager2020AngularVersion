import { TestBed } from '@angular/core/testing';

import { EncryptdecryptService } from '../../app/services/encryptdecrypt.service';

describe('EncryptdecryptService', () => {
  let service: EncryptdecryptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptdecryptService);
  });

  it('EncryptdecryptService can be created', () => {
    expect(service).toBeTruthy();
  });
});
