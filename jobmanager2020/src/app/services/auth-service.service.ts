import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserCridentials } from '../../app/shared/model/usercridentials';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserCridentials>;
  public currentUser: Observable<UserCridentials>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserCridentials>(
      (this.currentUser = JSON.parse(
        localStorage.getItem('currentUser') || '{}'
      ))
    );

    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserCridentials {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);

          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
