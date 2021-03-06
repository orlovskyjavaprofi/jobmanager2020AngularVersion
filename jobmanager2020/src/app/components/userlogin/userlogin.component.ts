import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { InmemorydbServiceService } from 'src/app/services/inmemorydb-service.service';
import { Role } from 'src/app/shared/model/role.enum';
import { UserCridentials } from 'src/app/shared/model/usercridentials';

@Component({
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  mainPageForm!: FormGroup;
  submitted = false;
  loading = false;

  loginError = '';
  redirectUrl!: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private inMemService: InmemorydbServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe(
      (params) => (this.redirectUrl = params.get('redirectUrl'))
    );
  }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.mainPageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get getAllUserInputFromMainPageForm() {
    return this.mainPageForm.controls;
  }

  validateUserForLogin(
    providedUserCridentials: UserCridentials,
    inputSetOfCredentials: Set<UserCridentials>
  ): boolean {
    let searchResultByUserCridentials: boolean = false;

    if (
      providedUserCridentials ===
      this.inMemService.findSpecifiedUserDetails(
        providedUserCridentials,
        inputSetOfCredentials
      )
    ) {
      searchResultByUserCridentials = true;
    }

    return searchResultByUserCridentials;
  }

  homeRoutePerRole(role: Role) {
    switch (role) {
      case Role.User:
        return '/useracn';
      case Role.Admin:
        return '/useracn';
      default:
        return '/welcome';
    }
  }
}
