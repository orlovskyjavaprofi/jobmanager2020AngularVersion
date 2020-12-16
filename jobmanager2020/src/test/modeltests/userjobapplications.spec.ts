import { UserJobApplications } from '../../app/shared/model/userjobapplications';

describe('UserJobApplications', () => {
  let userJobApplications: UserJobApplications = null;
  let userEmailLogin: string;

  beforeEach(() => {
    userEmailLogin = 'johnsmith@test.com';
    userJobApplications = new UserJobApplications(userEmailLogin);
  });

  test('UserJobApplications are defined', () => {
    expect(userJobApplications).toBeDefined();
  });

  test('case: User provided valid email login', () => {
    expect(userJobApplications.getUserEmailLogin()).toBe('johnsmith@test.com');
  });

  afterEach(() => {
    userJobApplications = null;
  });
});
