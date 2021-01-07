import { Injectable } from '@angular/core';
import { UserCridentials } from '../shared/model/usercridentials';
import { UserDetails } from '../shared/model/userdetails';
import { UserEmailDetails } from '../shared/model/useremaildetails';
import { UserJobApplications } from '../shared/model/userjobapplications';
@Injectable({
  providedIn: 'root',
})
export class InmemorydbServiceService {
  constructor() {}

  private inMemoryStorageSet = new Set<UserDetails>();
  private inMemoryStorageSetOfUserCridentials = new Set<UserCridentials>();
  private inMemoryStorageSetOfUserJobApplications = new Set<UserJobApplications>();

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

  public getInMemDBUserJobApplicationsPerUser(): Set<UserJobApplications> {
    return this.inMemoryStorageSetOfUserJobApplications;
  }

  public setInMemDB(
    inputForUserDetails: UserDetails,
    userPassword: string
  ): void {
    // check if the user already exist in "database" and refues insertion!
    //begin of if
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
    //end of if
  }

  public saveUserJobApplication(
    inputUserEmail: string,
    inputUserEmailTopic: string,
    inputUserEmailBody: string,
    userApplicationPDFFile: File,
    inputForCompanyName: string
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
    let newUserJobApplication: UserJobApplications;
    let foundJobApplicationAndsaved: number = 0;
    let validateInputCompanyName: boolean =
      Object.is(inputForCompanyName, undefined) === false;
    if (
      validateInputUserEmail &&
      validateInputUserEmailTopic &&
      validateinputUserEmailBody &&
      validateinputUserEmailJobApplFile &&
      validateInputCompanyName
    ) {
      if (
        this.checkIfGivenUserExistInStorageOfEmailDetails(inputUserEmail) ===
        false
      ) {
        newUserJobApplication = new UserJobApplications(inputUserEmail);
        newUserJobApplication
          .getinMemorySetOfUserEmailDetails()
          .add(
            new UserEmailDetails(
              inputUserEmailTopic,
              inputUserEmailBody,
              userApplicationPDFFile,
              inputForCompanyName
            )
          );
        this.getInMemDBUserJobApplicationsPerUser().add(newUserJobApplication);
        saveResult = true;
      } else {
        foundJobApplicationAndsaved = this.findUserJobApplicationByUserEmail(
          inputUserEmail
        ).addAndCountEmailDetailsToUserJobApplication(
          new UserEmailDetails(
            inputUserEmailTopic,
            inputUserEmailBody,
            userApplicationPDFFile,
            inputForCompanyName
          )
        );

        saveResult = this.checkIfJobApplicationWasAddToExistingUser(
          foundJobApplicationAndsaved
        );
      }
    }

    return saveResult;
  }

  private checkIfJobApplicationWasAddToExistingUser(
    saveAmountCounter: number
  ): boolean {
    let result: boolean = false;

    if (saveAmountCounter > 0) {
      result = true;
    }

    return result;
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

  public findUserJobApplicationByUserEmail(
    inputForUserEmail: string
  ): UserJobApplications {
    let userJobApplicationResult: UserJobApplications;
    userJobApplicationResult = new UserJobApplications('undefined');
    for (const itemUserJobApplication of this.getInMemDBUserJobApplicationsPerUser().values()) {
      if (inputForUserEmail === itemUserJobApplication.getUserEmailLogin()) {
        userJobApplicationResult = itemUserJobApplication;
        break;
      }
    }
    return userJobApplicationResult;
  }

  public checkIfGivenUserExistInStorageOfEmailDetails(
    inputForUserEmail: string
  ): boolean {
    let result: boolean = false;

    for (const itemUserEmailDetails of this.getInMemDBUserJobApplicationsPerUser().values()) {
      if (inputForUserEmail === itemUserEmailDetails.getUserEmailLogin()) {
        result = true;
        break;
      }
    }

    return result;
  }
}
