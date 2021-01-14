import { AdminUserForLogin } from '../../app/shared/model/adminuser';
import { AdminUserAffiliation } from '../../app/shared/model/adminuseraffiliation.enum';
describe('Admin user behavior', () => {
  let adminUser: AdminUserForLogin = null;

  beforeEach(() => {
    adminUser = new AdminUserForLogin(
      'John',
      'Smith',
      'tester@tester.com',
      true,
      AdminUserAffiliation.NPO,
      'testpassword0000*-'
    );
  });

  test('Admin user is defined', () => {
    expect(adminUser).toBeDefined();
  });

  afterEach(() => {
    adminUser = null;
  });
});
