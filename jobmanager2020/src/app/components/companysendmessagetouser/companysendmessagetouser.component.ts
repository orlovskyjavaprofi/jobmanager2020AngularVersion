import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-companysendmessagetouser',
  templateUrl: './companysendmessagetouser.component.html',
  styleUrls: ['./companysendmessagetouser.component.css'],
})
export class CompanysendmessagetouserComponent implements OnInit {
  isLinear = true;
  constructor() {}
  companyRepresentativeProvidesSkillSetFromGroup = new FormGroup({});
  companyRepresentativeMessageForAJobSeeker = new FormGroup({});

  ngOnInit(): void {}
}
