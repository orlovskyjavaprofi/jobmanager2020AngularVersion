import { AdminUserForLogin } from '../../app/shared/model/adminuser';

describe('Admin user behavior', () => {
  let adminUser: AdminUserForLogin = null;

  beforeEach(() => {
    adminUser = new AdminUserForLogin();
  });

  test('Admin user is defined', () => {
    expect(adminUser).toBeDefined();
  });

  afterEach(() => {
    adminUser = null;
  });
});
