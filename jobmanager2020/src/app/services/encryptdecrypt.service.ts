import { Injectable } from '@angular/core';
import { debug } from 'console';
import SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root',
})
export class EncryptdecryptService {
  constructor() {}

  public encryptUserData(
    inputForKey: string,
    inputForUserData: string
  ): SecureLS {
    let result: string = 'undefined';
    let secStorage = new SecureLS({ encodingType: 'aes' });

    if (inputForKey.length >= 12 && inputForUserData.length >= 2) {
      secStorage.set(inputForKey, { data: inputForUserData });
    }

    return secStorage;
  }

  public decryptUserData(inputForkey: string, encryptedData: SecureLS): string {
    let result: string = 'undefined';
    if (
      encryptedData !== null &&
      encryptedData !== undefined &&
      inputForkey.length >= 12
    ) {
      result = encryptedData.get(inputForkey).data;
    }
    return result;
  }
}
