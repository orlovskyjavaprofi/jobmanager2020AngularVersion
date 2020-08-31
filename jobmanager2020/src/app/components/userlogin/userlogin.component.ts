import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { Role } from 'src/app/shared/model/role.enum';

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

  async login(submittedForm: FormGroup) {
    this.loading = true;
    this.authService
      .login(submittedForm.value.username, submittedForm.value.password)
      .subscribe(
        (authStatus) => {
          if (authStatus.isAuthenticated) {
            this.router.navigate([
              this.redirectUrl || this.homeRoutePerRole(authStatus.userRole),
            ]);
          }
        },
        (error) => (this.loginError = error)
      );
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
