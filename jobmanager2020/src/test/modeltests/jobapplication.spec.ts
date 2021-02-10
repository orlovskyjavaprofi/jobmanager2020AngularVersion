import { CompanySizeTypes } from 'src/app/shared/model/companysizes';
import { JobApplication } from '../../app/shared/model/userjobapplication';
import { CompanyTypes } from 'src/app/shared/model/companytypes';
import { SalutationTypes } from 'src/app/shared/model/salutationtypes';
describe('UserDetails', () => {
  let userJobApplication: JobApplication = null;

  beforeEach(() => {
    userJobApplication = new JobApplication(
      '1.02.2019',
      'USA',
      'Austin, Texas',
      'Military',
      CompanySizeTypes.Large,
      CompanyTypes.Goverment,
      'topsecret@dod.com',
      SalutationTypes.Mr,
      'Smiths',
      'this is great company!'
    );
  });

  afterEach(() => {
    userJobApplication = null;
  });

  test('User job application is defined', () => {
    expect(userJobApplication).toBeDefined();
  });

  test('User job application, check if a note set up for the new job application', () => {
    expect(userJobApplication.getUserNoteAboutJobAppl()).toBe(
      'this is great company!'
    );
  });

  test('User job application, check if date can be set', () => {
    expect(userJobApplication.getDateWhenJobApplicationWasSend()).toBe(
      '1.02.2019'
    );
  });

  test('User job application, check if company contact person last name can be set', () => {
    expect(userJobApplication.getCompanyContactPersonLastName()).toBe('Smiths');
  });

  test('User job application, check if country can be set', () => {
    expect(userJobApplication.getCouontryNameWhereJobApplicationSend()).toBe(
      'USA'
    );
  });

  test('User job application, check if city can be set', () => {
    expect(userJobApplication.getCityNameWhereJobApplicationSend()).toBe(
      'Austin, Texas'
    );
  });

  test('User job application check if company industry can be set', () => {
    expect(userJobApplication.getIndustryWhereJobApplicationSend()).toBe(
      'Military'
    );
  });

  test('User job application check if company size can be set', () => {
    expect(userJobApplication.getCompanySizeWhereJobApplicationSend()).toBe(
      CompanySizeTypes.Large
    );
  });

  test('User job application check if company type can be set', () => {
    expect(userJobApplication.getCompanyTypeWhereJobApplicationSend()).toBe(
      CompanyTypes.Goverment
    );
  });

  test('User job application, check if email can be set', () => {
    expect(userJobApplication.getEmailOfJobApplicationRecipient()).toBe(
      'topsecret@dod.com'
    );
  });

  test('User job application check if company salutation type can be set', () => {
    expect(userJobApplication.getCompanyRecipientSalutationType()).toBe(
      SalutationTypes.Mr
    );
  });
});
