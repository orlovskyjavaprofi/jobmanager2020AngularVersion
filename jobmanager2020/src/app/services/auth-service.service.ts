import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserCridentials } from '../../app/shared/model/usercridentials';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}
}
