import { UserJobApplications } from '../../app/shared/model/userjobapplications';
import { UserEmailDetails } from '../../app/shared/model/useremaildetails';
import fs from 'fs';

describe('UserJobApplications', () => {
  let userJobApplications: UserJobApplications = null;
  let userEmailLogin: string;
  let userEmailDetails: UserEmailDetails;
  let userEmailTopic: string;
  let userEmailBodyText: string;
  let userEmailPdfFile: File;
  let companyName: string;

  beforeEach(() => {
    userEmailLogin = 'johnsmith@test.com';
    userJobApplications = new UserJobApplications(userEmailLogin);

    try {
      userEmailTopic = 'Applications as software developer';
      userEmailBodyText = 'this is a simple text';
      companyName = 'RandomCompany';
      const data = fs.readFileSync('src/test/testassets/testdocument.pdf');
      userEmailPdfFile = new File([data], 'testdocument.pdf', {
        type: 'application/pdf',
      });
      userEmailDetails = new UserEmailDetails(
        userEmailTopic,
        userEmailBodyText,
        userEmailPdfFile,
        companyName
      );
    } catch (err) {
      console.error(err);
    }
  });

  test('UserJobApplications are defined', () => {
    expect(userJobApplications).toBeDefined();
  });

  test('case: User provided valid email login', () => {
    expect(userJobApplications.getUserEmailLogin()).toBe('johnsmith@test.com');
  });

  test('case: User created a email details with email topic, bodytext, pdf file check if it was save in job applications', () => {
    expect(
      userJobApplications.addAndCountEmailDetailsToUserJobApplication(
        userEmailDetails
      )
    ).toBe(1);
  });

  test('case: User created a email details with email topic, bodytext, pdf file check the after it was added to job applications you can retrieve the email details', () => {
    userJobApplications.addAndCountEmailDetailsToUserJobApplication(
      userEmailDetails
    );
    expect(
      userJobApplications.findUserEmailDetailsByEmailDetails(userEmailDetails)
    ).toBe(userEmailDetails);
  });

  test('case: find email details by given company name', () => {
    userJobApplications.addAndCountEmailDetailsToUserJobApplication(
      userEmailDetails
    );
    expect(userJobApplications.findEmailDetailsByCompanyName(companyName)).toBe(
      userEmailDetails
    );
  });

  afterEach(() => {
    userJobApplications = null;
  });
});
