import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserDetails } from 'src/app/shared/model/userdetails';

@Component({
  templateUrl: 'userregistration.component.html',
  styleUrls: ['userregistration.component.css'],
})
export class UserregistrationComponent implements OnInit {
  registerNewUserForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerNewUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userEmail: ['', Validators.required],
      userCity: ['', Validators.required],
      userBirthday: ['', Validators.required],
      userCountry: ['', Validators.required],
      userStreetName: ['', Validators.required],
      userStreetNumber: ['', Validators.required],
    });
  }

  get getAllUserInputFromRegisterForm() {
    return this.registerNewUserForm.controls;
  }

  onSubmit(value: any): string {
    let message: string;
    message = "user wasn't registered";

    let inputForFirstName: string;
    let inputForLastName: string;
    let inputForUserEmail: string;
    let inputForUserCity: string;
    let inputForBirthday: string;
    let inputForCountry: string;
    let inputForStreetName: string;
    let inputForStreetNumber: string;

    this.submitted = true;
    if (this.registerNewUserForm.invalid) {
      return message;
    } else {
      inputForFirstName = value.firstName;
      inputForLastName = value.lastName;
      inputForUserEmail = value.userEmail;
      inputForUserCity = value.userCity;
      inputForBirthday = value.userBirthday;
      inputForCountry = value.userCountry;
      inputForStreetName = value.userStreetName;
      inputForStreetNumber = value.userStreetNumber;

      message = this.userProvidedInput(
        inputForFirstName,
        inputForLastName,
        inputForUserEmail,
        inputForUserCity,
        inputForBirthday,
        inputForCountry,
        inputForStreetNumber,
        inputForStreetName
      );
      if (message === 'new user should be created') {
        message = 'new user was registered';
        //create user details objects
        //implement call for the persistence
      }
    }
    this.loading = true;
    return message;
  }

  userProvidedInput(
    userfirstName: string,
    userlastName: string,
    userEmail: string,
    userCity: string,
    userBirthDay: string,
    userCountryName: string,
    userStreetNumber: string,
    userStreetName: string
  ): string {
    let newUserData: UserDetails;
    let createUser: boolean;
    createUser = false;
    let message: string;
    message = 'user was not created';
    let inputchain: string;
    inputchain = userfirstName.concat(
      ',' +
        userlastName.toString() +
        ',' +
        userEmail.toString() +
        ',' +
        userCity.toString() +
        ',' +
        userBirthDay.toString() +
        ',' +
        userCountryName.toString() +
        ',' +
        userStreetNumber.toString() +
        ',' +
        userStreetName.toString()
    );
    let inputsArr = inputchain.split(',');

    for (let i in inputsArr) {
      if (this.checkIfProvidedInputNotValid(inputsArr[i]) === 'undefined') {
        createUser = false;
        break;
      } else {
        createUser = true;
      }
    }

    message = this.checkIfUserAllowedToBeCreated(createUser);

    return message;
  }

  checkIfProvidedInputNotValid(input: string): string {
    let result: string;
    result = 'undefined';

    if (input.length > 0) {
      result = input;
    }

    return result;
  }

  checkIfUserAllowedToBeCreated(userallowance: boolean): string {
    let message: string;
    message = 'user was not created';
    if (userallowance === true) {
      message = 'new user should be created';
    }
    return message;
  }
}
