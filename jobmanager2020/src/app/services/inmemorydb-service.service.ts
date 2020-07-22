import { Injectable } from '@angular/core';
import { UserDetails } from '../shared/model/userdetails';

@Injectable({
  providedIn: 'root',
})
export class InmemorydbServiceService {
  constructor() {}

  private inMemoryStorageSet = new Set<UserDetails>();

  saveUserToMemory(inputUserDetails: UserDetails): boolean {
    let result: boolean;
    result = false;

    if (!(inputUserDetails === null)) {
      this.setInMemDB(inputUserDetails);

      result = true;
    }
    return result;
  }

  public getInMemDB(): Set<UserDetails> {
    return this.inMemoryStorageSet;
  }

  public setInMemDB(inputForUserDetails: UserDetails): void {
    this.inMemoryStorageSet.add(inputForUserDetails);
  }
}
