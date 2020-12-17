export class UserEmailDetails {
  private userEmailTopic: string = 'undefined';
  private userEmailBodyText: string = 'undefined';
  private userPdfJobApplFile: File;
  private companyWhereUserAppl: string = 'undefined';

  public constructor(
    userInputForEmailTopic: string,
    userInputforEmailBodyText: string,
    userInputForPdfFile: File,
    inputForcompanyWhereUserAppl: string
  ) {
    this.userEmailTopic = userInputForEmailTopic;
    this.userEmailBodyText = userInputforEmailBodyText;
    this.userPdfJobApplFile = userInputForPdfFile;
    this.companyWhereUserAppl = inputForcompanyWhereUserAppl;
  }

  public getUserEmailTopic(): string {
    return this.userEmailTopic;
  }
  public getUserEmailBodyText(): string {
    return this.userEmailBodyText;
  }

  public getUserEmailFileAttachment(): File {
    return this.userPdfJobApplFile;
  }
  public getCompanyWhereUserAppl(): string {
    return this.companyWhereUserAppl;
  }
}
