import { JobApplication } from '../../app/shared/model/userjobapplication';

describe('UserDetails', () => {
  let userJobApplication: JobApplication = null;

  beforeEach(() => {
    userJobApplication = new JobApplication('1.02.2019');
  });

  afterEach(() => {
    userJobApplication = null;
  });

  test('User job application is defined', () => {
    expect(userJobApplication).toBeDefined();
  });

  test('User job application check if date can be set', () => {
    expect(userJobApplication.getDateWhenJobApplicationWasSend()).toBe(
      '1.02.2019'
    );
  });
});
