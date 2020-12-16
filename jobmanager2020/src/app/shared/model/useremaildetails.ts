export class UserEmailDetails {
  private userEmailTopic: string = 'undefined';
  private userEmailBodyText: string = 'undefined';
  private userPdfJobApplFile: File;

  public constructor(
    userInputForEmailTopic: string,
    userInputforEmailBodyText: string,
    userInputForPdfFile: File
  ) {
    this.userEmailTopic = userInputForEmailTopic;
    this.userEmailBodyText = userInputforEmailBodyText;
    this.userPdfJobApplFile = userInputForPdfFile;
  }
}
