import { UserEmailDetails } from './useremaildetails';

export class UserJobApplications {
  private userEmailLogin: string = 'undefined';
  private inMemorySetOfUserEmailDetails = new Set<UserEmailDetails>();

  public constructor(userInputForEmailLogin: string) {
    this.userEmailLogin = userInputForEmailLogin;
  }

  public getUserEmailLogin(): string {
    return this.userEmailLogin;
  }

  public addAndCountEmailDetailsToUserJobApplication(
    userInputForEmailDetails: UserEmailDetails
  ): number {
    this.getinMemorySetOfUserEmailDetails().add(userInputForEmailDetails);
    return this.getinMemorySetOfUserEmailDetails().size;
  }

  public getinMemorySetOfUserEmailDetails(): Set<UserEmailDetails> {
    return this.inMemorySetOfUserEmailDetails;
  }

  public findUserEmailDetailsByEmailDetails(
    userInputForEmailDetails
  ): UserEmailDetails {
    let emptyFile: File;
    let resultOfSearch: UserEmailDetails = new UserEmailDetails(
      'undefined',
      'undefined',
      emptyFile
    );

    for (const itemUserEmailDetails of this.getinMemorySetOfUserEmailDetails().values()) {
      if (userInputForEmailDetails === itemUserEmailDetails) {
        resultOfSearch = itemUserEmailDetails;
        break;
      }
    }

    return resultOfSearch;
  }
}
