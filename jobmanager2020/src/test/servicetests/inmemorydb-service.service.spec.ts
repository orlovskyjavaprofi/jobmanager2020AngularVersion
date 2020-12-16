import { TestBed } from '@angular/core/testing';
import { UserDetails } from 'src/app/shared/model/userdetails';
import { UserEmploymentTypes } from 'src/app/shared/model/usertypeemployments';

import { InmemorydbServiceService } from '../../app/services/inmemorydb-service.service';
import fs from 'fs';
import { UserJobApplications } from 'src/app/shared/model/userjobapplications';
import { UserEmailDetails } from 'src/app/shared/model/useremaildetails';
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
  let userApplicationPDFFile: File;
  let inputUserEmailTopic: string;
  let inputUserEmailBody: string;

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

  it('case not save user job application to db when user provided invalid input', () => {
    let inputUserEmail: string;
    expect(
      service.saveUserJobApplication(
        inputUserEmail,
        inputUserEmailTopic,
        inputUserEmailBody,
        userApplicationPDFFile
      )
    ).toBeFalsy();
  });

  it('case save user job application to db when user provided valid input', () => {
    try {
      const data = fs.readFileSync('src/test/testassets/testdocument.pdf');
      userApplicationPDFFile = new File([data], 'testdocument.pdf', {
        type: 'application/pdf',
      });

      let inputUserEmail: string;
      inputUserEmail = 'johnsmith@test.com';
      inputUserEmailTopic = 'Job application as software developer';
      inputUserEmailBody = 'This is simple text for test';

      expect(
        service.saveUserJobApplication(
          inputUserEmail,
          inputUserEmailTopic,
          inputUserEmailBody,
          userApplicationPDFFile
        )
      ).toBeTruthy();
    } catch (err) {
      console.error(err);
    }
  });

  it('verify that a user with given email login exist', () => {
    try {
      const data = fs.readFileSync('src/test/testassets/testdocument.pdf');
      userApplicationPDFFile = new File([data], 'testdocument.pdf', {
        type: 'application/pdf',
      });

      let inputUserEmail: string;
      inputUserEmail = 'johnsmith@test.com';
      inputUserEmailTopic = 'Job application as software developer';
      inputUserEmailBody = 'This is simple text for test';
      let testUserJobAppl: UserJobApplications = new UserJobApplications(
        inputUserEmail
      );
      testUserJobAppl
        .getinMemorySetOfUserEmailDetails()
        .add(
          new UserEmailDetails(
            inputUserEmailTopic,
            inputUserEmailBody,
            userApplicationPDFFile
          )
        );

      service.getInMemDBUserJobApplicationsPerUser().add(testUserJobAppl);

      expect(
        service.checkIfGivenUserExistInStorageOfEmailDetails(inputUserEmail)
      ).toBeTruthy();
    } catch (err) {
      console.error(err);
    }
  });

  it('case user email login exist in user job applications set and the new user email details must be atached to it', () => {
    try {
      const data = fs.readFileSync('src/test/testassets/testdocument.pdf');
      userApplicationPDFFile = new File([data], 'testdocument.pdf', {
        type: 'application/pdf',
      });

      let inputUserEmail: string;
      inputUserEmail = 'johnsmith@test.com';
      inputUserEmailTopic = 'Job application as software developer';
      inputUserEmailBody = 'This is simple text for test';
      let testUserJobAppl: UserJobApplications = new UserJobApplications(
        inputUserEmail
      );
      testUserJobAppl
        .getinMemorySetOfUserEmailDetails()
        .add(
          new UserEmailDetails(
            inputUserEmailTopic,
            inputUserEmailBody,
            userApplicationPDFFile
          )
        );

      service.getInMemDBUserJobApplicationsPerUser().add(testUserJobAppl);

      expect(service.findUserJobApplicationByUserEmail(inputUserEmail)).toBe(
        testUserJobAppl
      );
    } catch (err) {
      console.error(err);
    }
  });
});
