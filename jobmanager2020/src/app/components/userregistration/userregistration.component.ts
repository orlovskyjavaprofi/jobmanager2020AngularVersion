import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

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

  onSubmit() {
    this.submitted = true;
    if (this.registerNewUserForm.invalid) {
      return;
    }
    this.loading = true;
    //AccountService must be implemented!
    //AlertService must be implemented
  }
}
