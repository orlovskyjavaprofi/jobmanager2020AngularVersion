import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  templateUrl: './currentjobapplications.component.html',
  styleUrls: ['./currentjobapplications.component.css'],
})
export class CurrentjobapplicationsComponent implements OnInit {
  displayedColumns: string[] = [
    'Company name',
    'Contact person',
    'Current state of job application',
    'Date when the application was send',
    'Special note',
    'Edit job application',
    'Delete job application',
  ];
  dataForDataSource = new MatTableDataSource<ApplicationDetailsDefineable>(
    ELEMENT_DATA
  );

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngOnInit() {
    this.dataForDataSource.paginator = this.paginator;
  }
}

export interface ApplicationDetailsDefineable {
  companyName: string;
  contactPersonName: string;
  currentStateOfUserJobApplication: string;
  dateOfJobApplicationWhenItWasSend: string;
  specialNoteForJobapplication: string;
  editButton: string;
  deliteButton: string;
}

const ELEMENT_DATA: ApplicationDetailsDefineable[] = [
  {
    companyName: 'A Inc',
    contactPersonName: 'Mike',
    currentStateOfUserJobApplication: 'Waiting for company answer',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    specialNoteForJobapplication: 'interesting',
    editButton: 'Edit',
    deliteButton: 'Delete',
  },
  {
    companyName: 'B Inc',
    contactPersonName: 'Johnson',
    currentStateOfUserJobApplication: 'Application reject',
    dateOfJobApplicationWhenItWasSend: '04.03.2019',
    specialNoteForJobapplication: 'interesting',
    editButton: 'Edit',
    deliteButton: 'Delite',
  },
  {
    companyName: 'C Inc',
    contactPersonName: 'Susan',
    currentStateOfUserJobApplication: 'Application approved',
    dateOfJobApplicationWhenItWasSend: '05.04.2019',
    specialNoteForJobapplication: 'interesting',
    editButton: 'Edit',
    deliteButton: 'Delite',
  },
  {
    companyName: 'D Inc',
    contactPersonName: 'Melanie',
    currentStateOfUserJobApplication: 'Company requested for interview',
    dateOfJobApplicationWhenItWasSend: '10.04.2019',
    specialNoteForJobapplication: 'interesting',
    editButton: 'Edit',
    deliteButton: 'Delite',
  },
  {
    companyName: 'E Inc',
    contactPersonName: 'Peter',
    currentStateOfUserJobApplication: 'Waiting for company answer',
    dateOfJobApplicationWhenItWasSend: '09.04.2019',
    specialNoteForJobapplication: 'interesting',
    editButton: 'Edit',
    deliteButton: 'Delite',
  },
  {
    companyName: 'F Inc',
    contactPersonName: 'Dilton',
    currentStateOfUserJobApplication: 'Application approved',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    specialNoteForJobapplication: 'interesting',
    editButton: 'Edit',
    deliteButton: 'Delite',
  },
  {
    companyName: 'G Inc',
    contactPersonName: 'Mike',
    currentStateOfUserJobApplication: 'Application reject',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    specialNoteForJobapplication: 'interesting',
    editButton: 'Edit',
    deliteButton: 'Delite',
  },
  {
    companyName: 'H Inc',
    contactPersonName: 'Maier',
    currentStateOfUserJobApplication: 'Application approved',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    specialNoteForJobapplication: 'interesting',
    editButton: 'Edit',
    deliteButton: 'Delite',
  },
  {
    companyName: 'I Inc',
    contactPersonName: 'Griffin',
    currentStateOfUserJobApplication: 'Application reject',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    specialNoteForJobapplication: 'interesting',
    editButton: 'Edit',
    deliteButton: 'Delite',
  },
  {
    companyName: 'K Inc',
    contactPersonName: 'Jax',
    currentStateOfUserJobApplication: 'Application reject',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    specialNoteForJobapplication: 'interesting',
    editButton: 'Edit',
    deliteButton: 'Delite',
  },
];
