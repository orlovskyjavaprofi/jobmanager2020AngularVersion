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

  saveUserToMemory(
    inputUserDetails: UserDetails,
    inputForUserPassword: string
  ): boolean {
    let result: boolean;
    result = false;

    if (!(inputUserDetails === null)) {
      this.setInMemDB(inputUserDetails, inputForUserPassword);

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

  public setInMemDB(
    inputForUserDetails: UserDetails,
    userPassword: string
  ): void {
    // check if the user already exist in "database" and refues insertion!
    this.inMemoryStorageSet.add(inputForUserDetails);
    let lengthOfInputUserPassword;

    if (userPassword !== null && userPassword !== undefined) {
      lengthOfInputUserPassword = userPassword.length;
    } else {
      lengthOfInputUserPassword = 0;
    }

    if (lengthOfInputUserPassword === 0) {
      userPassword = this.makeRandomPassword();
    } else if (lengthOfInputUserPassword < 5) {
      userPassword = this.makeRandomPassword();
    }

    this.inMemoryStorageSetOfUserCridentials.add(
      new UserCridentials(inputForUserDetails.userEmail, userPassword)
    );

    // generate and send email to the user so that user notified that he or she can login!
  }

  public saveUserJobApplication(
    inputUserEmail: string,
    inputUserEmailTopic: string,
    inputUserEmailBody: string,
    userApplicationPDFFile: File
  ): boolean {
    let saveResult = false;
    let validateInputUserEmail: boolean =
      Object.is(inputUserEmail, undefined) === false;
    let validateInputUserEmailTopic: boolean =
      Object.is(inputUserEmailTopic, undefined) === false;
    let validateinputUserEmailBody: boolean =
      Object.is(inputUserEmailBody, undefined) === false;
    let validateinputUserEmailJobApplFile: boolean =
      Object.is(userApplicationPDFFile, undefined) === false;

    if (
      validateInputUserEmail &&
      validateInputUserEmailTopic &&
      validateinputUserEmailBody &&
      validateinputUserEmailJobApplFile
    ) {
      //Verify that user with give email exist
      //if exist in db then store the user job application in db
      //otherwise not return false
      //User must have n job applications store in form of collection

      saveResult = true;
    }

    return saveResult;
  }

  private makeRandomPassword() {
    const length = 12;
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>|-_,.;:?`´!!§$%&/()=?/^°';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public findSpecifiedUserDetails(
    userCridentialsMatch: UserCridentials,
    userCridentialsInDB: Set<UserCridentials>
  ): UserCridentials {
    let resultOfSearch: UserCridentials = new UserCridentials('none', 'none');

    for (const itemUserCridentials of userCridentialsInDB.values()) {
      if (userCridentialsMatch === itemUserCridentials) {
        resultOfSearch = itemUserCridentials;
        break;
      }
    }

    return resultOfSearch;
  }
}
