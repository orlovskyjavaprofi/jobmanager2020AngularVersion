import { Injectable } from '@angular/core';
import { UserCridentials } from '../shared/model/usercridentials';
import { UserDetails } from '../shared/model/userdetails';

@Injectable({
  providedIn: 'root',
})
export class InmemorydbServiceService {
  constructor() {}

  private inMemoryStorageSet = new Set<UserDetails>();
  private inMemoryStorageSetOfUserCridentials = new Set<UserCridentials>();

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

  public getInMemDBUserCridentials(): Set<UserCridentials> {
    return this.inMemoryStorageSetOfUserCridentials;
  }

  public setInMemDB(inputForUserDetails: UserDetails): void {
    this.inMemoryStorageSet.add(inputForUserDetails);
    //store user mail and generate random strong 12 digit password and store it in UserCridentials inmemorydb!
  }

  public findSpecifiedUserDetails(userCridentialsWhichMustBeFound: UserCridentials): UserCridentials{
    let resultOfSearch: UserCridentials;

    resultOfSearch = new UserCridentials("none","none");

    for(let itemUserCridentials of this.getInMemDBUserCridentials().values()){
      if(userCridentialsWhichMustBeFound === itemUserCridentials){
        resultOfSearch = itemUserCridentials;
        break;
      }
    }

    return resultOfSearch;
  }
}
