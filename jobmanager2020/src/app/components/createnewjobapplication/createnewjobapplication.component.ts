import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanySizeTypes } from 'src/app/shared/model/companysizes';
import { CompanyTypes } from 'src/app/shared/model/companytypes';
import { SalutationTypes } from 'src/app/shared/model/salutationtypes';
interface contractForJobApplicationSelectionRepresentation {
  value: string;
  viewValue: string;
}
@Component({
  templateUrl: './createnewjobapplication.component.html',
  styleUrls: ['./createnewjobapplication.component.css'],
})
export class CreatenewjobapplicationComponent implements OnInit {
  constructor() {}
  newJobApplForm = new FormGroup({
    selCompanySizeTypeFormControl: new FormControl(''),
    selCompanyBusinessTypeFormControl: new FormControl(''),
    selCompanyContactSalutationFormcontrol: new FormControl(''),
    dateInputFormatControl: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\\d\\d$'
      ),
    ]),
    countryInputFormatControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
    cityInputFormatControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4),
    ]),
    companyIndustryTypeFormatcontrol: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5),
    ]),
    companyContactEmailFormatcontrol: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    companyContactLastNameFormatcontrol: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
    addNoteaboutCompanyFormatControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
  });

  selectionViewForDifferentCompanyContactSalutationTypes: contractForJobApplicationSelectionRepresentation[] = [
    {
      value: SalutationTypes.Mr,
      viewValue: SalutationTypes.Mr.toString(),
    },
    {
      value: SalutationTypes.Mrs,
      viewValue: SalutationTypes.Mrs.toString(),
    },
  ];

  selectionViewForDifferentCompanyTypes: contractForJobApplicationSelectionRepresentation[] = [
    {
      value: CompanyTypes.Private,
      viewValue: CompanyTypes.Private.toString(),
    },
    {
      value: CompanyTypes.Public,
      viewValue: CompanyTypes.Public.toString(),
    },
    {
      value: CompanyTypes.Holding,
      viewValue: CompanyTypes.Holding.toString(),
    },
    {
      value: CompanyTypes.Subsidiary,
      viewValue: CompanyTypes.Subsidiary.toString(),
    },
    {
      value: CompanyTypes.StockTrading,
      viewValue: CompanyTypes.StockTrading.toString(),
    },
    {
      value: CompanyTypes.Goverment,
      viewValue: CompanyTypes.Goverment.toString(),
    },
    {
      value: CompanyTypes.Charity,
      viewValue: CompanyTypes.Charity.toString(),
    },
  ];

  selectionViewForDifferentCompanySizeTypes: contractForJobApplicationSelectionRepresentation[] = [
    {
      value: CompanySizeTypes.Small,
      viewValue: CompanySizeTypes.Small.toString(),
    },
    {
      value: CompanySizeTypes.Middle,
      viewValue: CompanySizeTypes.Middle.toString(),
    },
    {
      value: CompanySizeTypes.Large,
      viewValue: CompanySizeTypes.Large.toString(),
    },
    {
      value: CompanySizeTypes.Huge,
      viewValue: CompanySizeTypes.Huge.toString(),
    },
  ];

  ngOnInit(): void {}

  public resetAddNewJobApplForm(): void {
    this.newJobApplForm.reset({
      selCompanySizeTypeFormControl: '',
      selCompanyBusinessTypeFormControl: '',
      selCompanyContactSalutationFormcontrol: '',
      dateInputFormatControl: '',
      countryInputFormatControl: '',
      cityInputFormatControl: '',
      companyIndustryTypeFormatcontrol: '',
      companyContactEmailFormatcontrol: '',
      companyContactLastNameFormatcontrol: '',
      addNoteaboutCompanyFormatControl: '',
    });
  }

  onFormSubmit(): void {
    if (Object.is(this.validateUserInputForNewJobApplAndStoreInmem(), true)) {
      this.debutOutput();
    }
  }

  //write method method which would forward the user input to inmem persistance to store the new job application safely in the inmemdb

  validateUserInputForNewJobApplAndStoreInmem(): boolean {
    let result: boolean = false;

    let checkForUserDateInput: boolean =
      this.newJobApplForm.value.dateInputFormatControl.length > 0 &&
      this.newJobApplForm.value.dateInputFormatControl != null;
    let checkForUserCountryInput: boolean =
      this.newJobApplForm.value.countryInputFormatControl.length > 0 &&
      this.newJobApplForm.value.countryInputFormatControl != null;
    let checkForUserCityInput: boolean =
      this.newJobApplForm.value.cityInputFormatControl.length > 0 &&
      this.newJobApplForm.value.cityInputFormatControl != null;
    let checkUserInputForIndustryType: boolean =
      this.newJobApplForm.value.companyIndustryTypeFormatcontrol.length > 0 &&
      this.newJobApplForm.value.companyIndustryTypeFormatcontrol != null;
    let checkUserInputForSizeType: boolean =
      this.newJobApplForm.value.selCompanySizeTypeFormControl.length > 0 &&
      this.newJobApplForm.value.selCompanySizeTypeFormControl != null;
    let checkUserInputForBusinessType: boolean =
      this.newJobApplForm.value.selCompanyBusinessTypeFormControl.length > 0 &&
      this.newJobApplForm.value.selCompanyBusinessTypeFormControl != null;
    let checkUserInputForEmail: boolean =
      this.newJobApplForm.value.companyContactEmailFormatcontrol.length > 0 &&
      this.newJobApplForm.value.companyContactEmailFormatcontrol != null;
    let checkUserInputForSalutation: boolean =
      this.newJobApplForm.value.selCompanyContactSalutationFormcontrol.length >
        0 &&
      this.newJobApplForm.value.selCompanyContactSalutationFormcontrol != null;
    let checkUserInputForLastContactName: boolean =
      this.newJobApplForm.value.companyContactLastNameFormatcontrol.length >
        0 &&
      this.newJobApplForm.value.companyContactLastNameFormatcontrol != null;
    let checkUserInputForNote: boolean =
      this.newJobApplForm.value.addNoteaboutCompanyFormatControl.length > 0 &&
      this.newJobApplForm.value.addNoteaboutCompanyFormatControl != null;

    if (
      Object.is(checkForUserDateInput, true) &&
      Object.is(checkForUserCountryInput, true) &&
      Object.is(checkForUserCityInput, true) &&
      Object.is(checkUserInputForIndustryType, true) &&
      Object.is(checkUserInputForSizeType, true) &&
      Object.is(checkUserInputForBusinessType, true) &&
      Object.is(checkUserInputForEmail, true) &&
      Object.is(checkUserInputForSalutation, true) &&
      Object.is(checkUserInputForLastContactName, true) &&
      Object.is(checkUserInputForNote, true)
    ) {
      result = true;
    }

    return result;
  }

  private debutOutput(): void {
    console.log(
      'Date when job application was send: ' +
        this.newJobApplForm.value.dateInputFormatControl
    );
    console.log(
      'Country: ' + this.newJobApplForm.value.countryInputFormatControl
    );
    console.log('City: ' + this.newJobApplForm.value.cityInputFormatControl);
    console.log(
      'Industry type: ' +
        this.newJobApplForm.value.companyIndustryTypeFormatcontrol
    );
    console.log(
      'Company size type: ' +
        this.newJobApplForm.value.selCompanySizeTypeFormControl
    );
    console.log(
      'Company type: ' +
        this.newJobApplForm.value.selCompanyBusinessTypeFormControl
    );
    console.log(
      'Company contact email: ' +
        this.newJobApplForm.value.companyContactEmailFormatcontrol
    );
    console.log(
      'Company contact person salutation type: ' +
        this.newJobApplForm.value.selCompanyContactSalutationFormcontrol
    );
    console.log(
      'Company contact person last name: ' +
        this.newJobApplForm.value.companyContactLastNameFormatcontrol
    );
    console.log(
      'Add note: ' + this.newJobApplForm.value.addNoteaboutCompanyFormatControl
    );
  }
}
