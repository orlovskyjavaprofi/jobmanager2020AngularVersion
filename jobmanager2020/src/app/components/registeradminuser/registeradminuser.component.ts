import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InmemorydbServiceService } from 'src/app/services/inmemorydb-service.service';
import { AdminUserForLogin } from 'src/app/shared/model/adminuser';
import { AdminUserAffiliation } from 'src/app/shared/model/adminuseraffiliation.enum';

interface AdminAffiliatesTypes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registeradminuser',
  templateUrl: './registeradminuser.component.html',
  styleUrls: ['./registeradminuser.component.css'],
})
export class RegisteradminuserComponent implements OnInit {
  constructor(private inMemService: InmemorydbServiceService) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);

  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(4),
  ]);

  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(4),
  ]);

  adminAffiliateOrgas: AdminAffiliatesTypes[] = [
    {
      value: AdminUserAffiliation.CLP,
      viewValue: AdminUserAffiliation.CLP.toString(),
    },
    {
      value: AdminUserAffiliation.JSC,
      viewValue: AdminUserAffiliation.JSC.toString(),
    },
    {
      value: AdminUserAffiliation.LLC,
      viewValue: AdminUserAffiliation.LLC.toString(),
    },
    {
      value: AdminUserAffiliation.NPO,
      viewValue: AdminUserAffiliation.NPO.toString(),
    },
  ];

  ngOnInit(): void {}

  //write method which triggered by GDPR checkbox when its checked, if checkbox is true meaning that is checked
  // register button should activated when this condition met!
  //when register button activated check during OnSubmit that Gdpr checkbox is activated! and only then call
  //registerUSer method,

  registerUser(
    inputForFirstName: string,
    inputForLastName: string,
    inputForEmail: string,
    inputTypeOfOrga: AdminUserAffiliation,
    inputForProtectedPassword: string
  ): boolean {
    let result: boolean = false;
    let activateAdminUser: boolean = false;
    let adminUser: AdminUserForLogin;

    let checkForInputFirstName: boolean =
      inputForFirstName.length > 0 && inputForFirstName != null;
    let checkForInputLastName: boolean =
      inputForLastName.length > 0 && inputForLastName != null;
    let checkForinputForEmail: boolean =
      inputForEmail.length > 0 && inputForEmail != null;
    let checkForinputTypeOfOrga: boolean =
      inputTypeOfOrga.length > 0 && inputTypeOfOrga != null;
    let checkForinputForProtectedPassword: boolean =
      inputForProtectedPassword.length >= 10 &&
      inputForProtectedPassword != null;

    if (
      Object.is(checkForInputFirstName, true) &&
      Object.is(checkForInputLastName, true) &&
      Object.is(checkForinputForEmail, true) &&
      Object.is(checkForinputTypeOfOrga, true) &&
      Object.is(checkForinputForProtectedPassword, true)
    ) {
      activateAdminUser = true;
      adminUser = new AdminUserForLogin(
        inputForFirstName,
        inputForLastName,
        inputForEmail,
        activateAdminUser,
        inputTypeOfOrga,
        inputForProtectedPassword
      );

      result = this.inMemService.storeAdminUser(adminUser);
    }

    return result;
  }
}
