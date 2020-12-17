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
    userInputForEmailDetails: UserEmailDetails
  ): UserEmailDetails {
    const emptyFile: File = new File([''], 'filename');
    let resultOfSearch: UserEmailDetails = new UserEmailDetails(
      'undefined',
      'undefined',
      emptyFile,
      'undefined'
    );

    for (const itemUserEmailDetails of this.getinMemorySetOfUserEmailDetails().values()) {
      if (userInputForEmailDetails === itemUserEmailDetails) {
        resultOfSearch = itemUserEmailDetails;
        break;
      }
    }

    return resultOfSearch;
  }

  public findEmailDetailsByCompanyName(
    inputForCompanyName: string
  ): UserEmailDetails {
    let resultOfSearch: UserEmailDetails;
    const emptyFile: File = new File([''], 'filename');

    resultOfSearch = new UserEmailDetails(
      'undefined',
      'undefined',
      emptyFile,
      'undefined'
    );

    if (inputForCompanyName.length > 0) {
      for (const itemUserEmailDetails of this.getinMemorySetOfUserEmailDetails().values()) {
        if (
          inputForCompanyName === itemUserEmailDetails.getCompanyWhereUserAppl()
        ) {
          resultOfSearch = itemUserEmailDetails;
          break;
        }
      }
    }

    return resultOfSearch;
  }
}
