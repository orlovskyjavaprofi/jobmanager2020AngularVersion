import { UserDetails } from '../app/shared/model/userdetails';

describe('UserDetails', () => {
  let userDetails: UserDetails = null;

  beforeEach(() => {
    userDetails = new UserDetails();
  });

  test('UserDetails are defined', () => {
    expect(userDetails).toBeDefined();
  });
});
