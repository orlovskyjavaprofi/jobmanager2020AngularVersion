import fs from 'fs';
import { UserEmailDetails } from '../../app/shared/model/useremaildetails';
describe('UserEmailDetails', () => {
  let userEmailTopic: string = 'job application as software developer';
  let userEmailBodyText: string = 'this is a test example of body email text';
  let userPdfJobApplFile: File;
  let userEmailDetails: UserEmailDetails;
  let userCompanyForAppl: string = 'RandomCorp';

  beforeEach(() => {
    try {
      const data = fs.readFileSync('src/test/testassets/testdocument.pdf');
      userPdfJobApplFile = new File([data], 'testdocument.pdf', {
        type: 'application/pdf',
      });
      userEmailDetails = new UserEmailDetails(
        userEmailTopic,
        userEmailBodyText,
        userPdfJobApplFile,
        userCompanyForAppl
      );
    } catch (err) {
      console.error(err);
    }
  });
  test('UserEmailDetails are defined', () => {
    expect(UserEmailDetails).toBeDefined();
  });

  test('case: check that user email topipc was set', () => {
    expect(userEmailDetails.getUserEmailTopic()).toBe(userEmailTopic);
  });

  test('case: check that user email body text was set', () => {
    expect(userEmailDetails.getUserEmailBodyText()).toBe(userEmailBodyText);
  });

  test('case: check that user email pdf file was set', () => {
    expect(userEmailDetails.getUserEmailFileAttachment()).toBe(
      userPdfJobApplFile
    );
  });

  test('case: check that user company name was set', () => {
    expect(userEmailDetails.getCompanyWhereUserAppl()).toBe(userCompanyForAppl);
  });

  afterEach(() => {
    userEmailDetails = null;
  });
});
