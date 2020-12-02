export class UserCridentials {
  id: number | undefined;
  username: string | undefined;
  password: string | undefined;
  token?: string;

  constructor(inputUsername: string | undefined, inputPassword: string | undefined){
    this.username = inputUsername;
    this.password = inputPassword;
  }
}
