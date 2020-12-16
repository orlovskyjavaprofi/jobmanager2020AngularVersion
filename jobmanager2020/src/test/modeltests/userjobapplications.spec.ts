import { UserJobApplications } from '../../app/shared/model/userjobapplications';

describe('UserJobApplications', () => {
  let userJobApplications: UserJobApplications = null;

  beforeEach(() => {
    userJobApplications = new UserJobApplications();
  });

  test('UserJobApplications are defined', () => {
    expect(userJobApplications).toBeDefined();
  });

  afterEach(() => {
    userJobApplications = null;
  });
});
