import { AdminUserAffiliation } from './adminuseraffiliation.enum';

export class AdminUserForLogin {
  private adminFirstName: string;
  private adminLastName: string;
  private adminEmail: string;
  private adminActivated: boolean = false;
  private adminOrga: AdminUserAffiliation;
  private adminPassword: string;

  constructor(
    inputForFirstName: string,
    inputForLastName: string,
    inputForEmail: string,
    inputForAdminUserActivation: boolean,
    inputTypeOfOrga: AdminUserAffiliation,
    inputForProtectedPassword: string
  ) {
    this.adminFirstName = inputForFirstName;
    this.adminLastName = inputForLastName;
    this.adminEmail = inputForEmail;
    this.adminActivated = inputForAdminUserActivation;
    this.adminOrga = inputTypeOfOrga;
    this.adminPassword = inputForProtectedPassword;
    /*console.log(
      'following admin created:\n' +
        this.adminFirstName +
        ' ' +
        this.adminLastName +
        ' ' +
        this.adminEmail +
        ' activated: ' +
        this.adminActivated +
        ' ' +
        this.adminOrga +
        ' with password: ' +
        this.adminPassword
    );*/
  }
}
