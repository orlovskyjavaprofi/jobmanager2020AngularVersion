import { UserEmploymentTypes } from './usertypeemployments';

export class UserDetails {
  userFirstName: string = 'user first name not set up!';
  userLastName: string = 'user last name not set up!';
  userEmail: string = 'user email not set up!';
  userCityName: string = 'New York';
  userBirthDay: string = '00.00.0000';
  userCountry: string = 'country name not set up!';
  userStreetNumber: string = '000000000';
  userStreetName: string = 'street name not set up!';
  userEmploymentState: UserEmploymentTypes;

  public constructor(
    userInputFirstName: string,
    userInputLastName: string,
    userInputForEmail: string,
    userInputForCityName: string,
    userInputForBirthDay: string,
    userInputForCountry: string,
    userInputForStreetNumber: string,
    userInputForStreetName: string,
    userInputForJobCurrentState: UserEmploymentTypes
  ) {
    this.userFirstName = userInputFirstName;
    this.userLastName = userInputLastName;
    this.userEmail = userInputForEmail;
    this.userCityName = userInputForCityName;
    this.userBirthDay = userInputForBirthDay;
    this.userCountry = userInputForCountry;
    this.userStreetNumber = userInputForStreetNumber;
    this.userStreetName = userInputForStreetName;
    this.userEmploymentState = userInputForJobCurrentState;
  }

  getUserFirstName(): string {
    return this.userFirstName;
  }

  getUserLastName(): string {
    return this.userLastName;
  }

  getUserEmail(): string {
    return this.userEmail;
  }

  getUserCityName(): string {
    return this.userCityName;
  }

  getUserBirthday(): string {
    return this.userBirthDay;
  }
  getUserCountry(): string {
    return this.userCountry;
  }
  getUserStreetNumber(): string {
    return this.userStreetNumber;
  }
  getUserStreetName(): string {
    return this.userStreetName;
  }

  getUserJobEmploymentState(): UserEmploymentTypes {
    return this.userEmploymentState;
  }
}
