export class UserJobApplications {
  private userEmailLogin: string = 'undefined';

  public constructor(userInputForEmailLogin: string) {
    this.userEmailLogin = userInputForEmailLogin;
  }

  public getUserEmailLogin(): string {
    return this.userEmailLogin;
  }
}
