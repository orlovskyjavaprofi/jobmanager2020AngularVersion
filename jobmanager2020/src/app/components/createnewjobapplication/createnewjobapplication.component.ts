import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanySizeTypes } from 'src/app/shared/model/companysizes';
interface SelectionForCompanySizeTypes {
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
  });

  selectionViewForDifferentCompanySizeTypes: SelectionForCompanySizeTypes[] = [
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
}
