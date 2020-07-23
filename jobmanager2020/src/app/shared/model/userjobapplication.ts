export class JobApplication {
  userJobApplicationDate: string = 'Day.Month.Year';

  public constructor(userInputForJobApplicationDate: string) {
    this.userJobApplicationDate = userInputForJobApplicationDate;
  }

  getDateWhenJobApplicationWasSend(): string {
    return this.userJobApplicationDate;
  }
}
