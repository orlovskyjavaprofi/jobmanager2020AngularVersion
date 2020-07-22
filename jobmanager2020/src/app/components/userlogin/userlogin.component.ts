import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  mainPageForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.mainPageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get getAllUserInputFromMainPageForm() {
    return this.mainPageForm.controls;
  }

  onSubmit() {
    this.loading = true;
  }
}
