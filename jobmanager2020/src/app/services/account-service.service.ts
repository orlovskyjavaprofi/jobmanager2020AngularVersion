import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetails } from '../../app/shared/model/userdetails';
import { UserEmploymentTypes } from '../../app/shared/model/usertypeemployments';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { InmemorydbServiceService } from './inmemorydb-service.service';
@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  constructor(private inmemorydbServiceService: InmemorydbServiceService) {}

  userDetailsValidator(inputUserDetails: UserDetails): boolean {
    let result = false;
    if (!(typeof inputUserDetails === 'undefined')) {
      if (!(inputUserDetails === null)) {
        result = true;
      }
    }
    return result;
  }

  storeUserInMemory(inputUserDetails: UserDetails, inputUserPassword: string): boolean {
    let result = false;

    result = this.userDetailsValidator(inputUserDetails);
    if (result === true) {
      this.inmemorydbServiceService.saveUserToMemory(inputUserDetails, inputUserPassword);
    }

    return result;
  }
}
