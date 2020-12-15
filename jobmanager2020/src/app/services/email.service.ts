import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  validateIfEmailTopicAndBodyNotEmpty(
    inputEmailTopic: string,
    inputEmailBodyMessage: string
  ): boolean {
    let validationResult: boolean = false;

    //chekc if both field are undefined!
    if (inputEmailTopic !== undefined && inputEmailBodyMessage !== undefined) {
      if (inputEmailTopic.length > 9 && inputEmailBodyMessage.length > 20) {
        validationResult = true;
      }
    }

    return validationResult;
  }
}
