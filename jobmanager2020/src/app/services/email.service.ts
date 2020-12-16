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

    if (inputEmailTopic !== undefined && inputEmailBodyMessage !== undefined) {
      if (inputEmailTopic.length > 9 && inputEmailBodyMessage.length > 20) {
        validationResult = true;
      }
    }

    return validationResult;
  }

  validateUserPdfFile(userInputFile: File): boolean {
    let validationResult: boolean = false;

    if (userInputFile !== undefined) {
      validationResult = true;
    }

    return validationResult;
  }
}
