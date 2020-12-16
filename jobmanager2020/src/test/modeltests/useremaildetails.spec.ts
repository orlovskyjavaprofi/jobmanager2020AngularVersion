import fs from 'fs';
import { UserEmailDetails } from '../../app/shared/model/useremaildetails';
describe('UserEmailDetails', () => {
  let userEmailTopic: string = 'job application as software developer';
  let userEmailBodyText: string = 'this is a test example of body email text';
  let userPdfJobApplFile: File;
  let userEmailDetails: UserEmailDetails;

  beforeEach(() => {
    try {
      const data = fs.readFileSync('src/test/testassets/testdocument.pdf');
      userPdfJobApplFile = new File([data], 'testdocument.pdf', {
        type: 'application/pdf',
      });
      userEmailDetails = new UserEmailDetails(
        userEmailTopic,
        userEmailBodyText,
        userPdfJobApplFile
      );
    } catch (err) {
      console.error(err);
    }
  });
  test('UserEmailDetails are defined', () => {
    expect(UserEmailDetails).toBeDefined();
  });

  afterEach(() => {
    userEmailDetails = null;
  });
});
