import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetails } from '../../app/shared/model/userdetails';
import { UserEmploymentTypes } from '../../app/shared/model/usertypeemployments';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  constructor() {}
}
