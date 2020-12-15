import { TestBed } from '@angular/core/testing';
import { UserDetails } from 'src/app/shared/model/userdetails';
import { UserEmploymentTypes } from 'src/app/shared/model/usertypeemployments';

import { InmemorydbServiceService } from '../../app/services/inmemorydb-service.service';

describe('InmemorydbServiceService', () => {
  let service: InmemorydbServiceService;

  let inputUserDetails: UserDetails;
  let inputUserEmploymentState: UserEmploymentTypes;

  let userFirstName: string;
  let userLastName: string;
  let userEmail: string;
  let userCityName: string;
  let userBirthDay: string;
  let userCountry: string;
  let userStreetNumber: string;
  let userStreetName: string;

  beforeEach(() => {
    userFirstName = 'user first name not set up!';
    userLastName = 'user last name not set up!';
    userEmail = 'user email not set up!';
    userCityName = 'New York';
    userBirthDay = '00.00.0000';
    userCountry = 'country name not set up!';
    userStreetNumber = '000000000';
    userStreetName = 'street name not set up!';
    inputUserEmploymentState = UserEmploymentTypes.Contractor;
    // tslint:disable-next-line: max-line-length
    inputUserDetails = new UserDetails(
      userFirstName,
      userLastName,
      userEmail,
      userCityName,
      userBirthDay,
      userCountry,
      userStreetNumber,
      userStreetName,
      inputUserEmploymentState
    );

    TestBed.configureTestingModule({});
    service = TestBed.inject(InmemorydbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('case save user to db', () => {
    expect(service.saveUserToMemory(inputUserDetails, 'randomPassword')).toBe(
      true
    );
  });

  //test case store provided file in memory userlogin cridential , and the file itself
  //verification of the file done by email service
  //expected result file stored true, file not stored false
});
