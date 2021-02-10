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
      Validators.minLength(4),
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
    });
  }
}
