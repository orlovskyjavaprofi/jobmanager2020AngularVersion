import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InmemorydbServiceService } from 'src/app/services/inmemorydb-service.service';
import { AdminUserForLogin } from 'src/app/shared/model/adminuser';
import {
  AdminUserAffiliation,
  findKeyForEnumOfUserAdminAffilOrga,
  selectEnumForTheGivenUserAdminOrga,
} from 'src/app/shared/model/adminuseraffiliation.enum';

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
  chkBoxGdprState: boolean = false;

  newAdminUserRegForm = new FormGroup({
    registrationBtnControl: new FormControl(''),
    checkBoxGDPRControl: new FormControl('', [
      Validators.required,
      Validators.requiredTrue,
    ]),
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordControl: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    firstNameControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4),
    ]),
    lastNameControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4),
    ]),
    selOrgaFormControl: new FormControl(''),
  });

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

  public resetNewAdminRegForm(): void {
    this.newAdminUserRegForm.reset({
      registrationBtnControl: '',
      checkBoxGDPRControl: '',
      emailFormControl: '',
      passwordControl: '',
      firstNameControl: '',
      lastNameControl: '',
      selOrgaFormControl: '',
    });
  }

  onFormSubmit(): void {
    let registrationsubmitted: boolean = false;
    let keyforenumofuseradminaffialiation: string;
    if (Object.is(this.newAdminUserRegForm.value.checkBoxGDPRControl, true)) {
      keyforenumofuseradminaffialiation = findKeyForEnumOfUserAdminAffilOrga(
        this.newAdminUserRegForm.value.selOrgaFormControl
      );

      registrationsubmitted = this.registerUser(
        this.newAdminUserRegForm.value.firstNameControl,
        this.newAdminUserRegForm.value.lastNameControl,
        this.newAdminUserRegForm.value.emailFormControl,
        selectEnumForTheGivenUserAdminOrga(keyforenumofuseradminaffialiation),
        this.newAdminUserRegForm.value.passwordControl
      );
      console.log('Registration submission state: ' + registrationsubmitted);
    }

    console.log(
      'User first name: ' + this.newAdminUserRegForm.value.firstNameControl
    );
    console.log(
      'User last name: ' + this.newAdminUserRegForm.value.lastNameControl
    );
    console.log(
      'User email: ' + this.newAdminUserRegForm.value.emailFormControl
    );
    console.log(
      'User password: ' + this.newAdminUserRegForm.value.passwordControl
    );
    console.log(
      'User affiliate organization: ' +
        this.newAdminUserRegForm.value.selOrgaFormControl
    );
    console.log(
      'USer selected chebox GDPR: ' +
        this.newAdminUserRegForm.value.checkBoxGDPRControl
    );
  }

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
