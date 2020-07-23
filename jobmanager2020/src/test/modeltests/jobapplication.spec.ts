import { JobApplication } from '../../app/shared/model/userjobapplication';

describe('UserDetails', () => {
  let userJobApplication: JobApplication = null;

  beforeEach(() => {
    userJobApplication = new JobApplication();
  });

  afterEach(() => {
    userJobApplication = null;
  });

  test('User job application is defined', () => {
    expect(userJobApplication).toBeDefined();
  });
});
