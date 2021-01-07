import { TestBed } from '@angular/core/testing';
import SecureLS from 'secure-ls';
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

  it('Encrypt data by given key', () => {
    let key: string = 'SuperSecureKey';
    let userdata: string = 'veryprivateuserdata';
    //Get encrypted data!
    expect(
      service.encryptUserData(key, userdata) != null &&
        service.encryptUserData(key, userdata) != undefined
    ).toBeTruthy();
  });

  it('Decrypt data by given key', () => {
    let key: string = 'SuperSecureKey';
    let userdata: string = 'veryprivateuserdata';
    let encryptedData = service.encryptUserData(key, userdata);

    expect(service.decryptUserData(key, encryptedData)).toEqual(userdata);
  });
});
