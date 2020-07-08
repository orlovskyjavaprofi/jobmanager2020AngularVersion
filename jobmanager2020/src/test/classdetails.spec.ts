import { UserDetails } from '../app/shared/model/userdetails';
import { UserEmploymentTypes } from '../app/shared/model/usertypeemployments';

describe('UserDetails', () => {
  let userDetails: UserDetails = null;

  beforeEach(() => {
    userDetails = new UserDetails(
      'John',
      'Smith',
      'user@email.com',
      'New York',
      '12.01.2020',
      'USA',
      '1234545656',
      'GeorgeBushstreet',
      UserEmploymentTypes.Freelancer
    );
  });

  afterEach(() => {
    userDetails = null;
  });

  test('UserDetails are defined', () => {
    expect(userDetails).toBeDefined();
  });

  test('case: User provided first name', () => {
    expect(userDetails.getUserFirstName()).toBe('John');
  });

  test('case: User provided last name', () => {
    expect(userDetails.getUserLastName()).toBe('Smith');
  });

  test('case: User provided email', () => {
    expect(userDetails.getUserEmail()).toBe('user@email.com');
  });

  test('case: User provided city name', () => {
    expect(userDetails.getUserCityName()).toBe('New York');
  });

  test('case: User provided birthday', () => {
    expect(userDetails.getUserBirthday()).toBe('12.01.2020');
  });

  test('case: User provided country name', () => {
    expect(userDetails.getUserCountry()).toBe('USA');
  });

  test('case: User provided street number', () => {
    expect(userDetails.getUserStreetNumber()).toBe('1234545656');
  });

  test('case: User provided street name', () => {
    expect(userDetails.getUserStreetName()).toBe('GeorgeBushstreet');
  });

  test('case: User provided selected one job state', () => {
    expect(userDetails.getUserJobEmploymentState()).toBe(
      UserEmploymentTypes.Freelancer
    );
  });
});
