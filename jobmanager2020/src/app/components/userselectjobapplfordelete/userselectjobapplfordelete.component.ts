import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  templateUrl: './userselectjobapplfordelete.component.html',
  styleUrls: ['./userselectjobapplfordelete.component.css'],
})
export class UserselectjobapplfordeleteComponent implements OnInit {
  displayedColumns: string[] = [
    'Company name',
    'Contact person',
    'Date when the application was send',
    'Title of the job application',
    'Current state of job application',
    'CheckboxesForUserDel',
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
  dateOfJobApplicationWhenItWasSend: string;
  userJobApplicationTitle: string;
  currentStateOfUserJobApplication: string;
  selectedChkBox: boolean;
}

const ELEMENT_DATA: ApplicationDetailsDefineable[] = [
  {
    companyName: 'A Inc',
    contactPersonName: 'Mike',
    userJobApplicationTitle: 'Fullstack developer',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    currentStateOfUserJobApplication: 'Awating answer from company',
    selectedChkBox: false,
  },
  {
    companyName: 'B Inc',
    contactPersonName: 'Johnson',
    userJobApplicationTitle: 'Java Script developer',
    dateOfJobApplicationWhenItWasSend: '04.03.2019',
    currentStateOfUserJobApplication: 'Rejcted',
    selectedChkBox: false,
  },
  {
    companyName: 'C Inc',
    contactPersonName: 'Susan',
    userJobApplicationTitle: 'Java developer',
    dateOfJobApplicationWhenItWasSend: '05.04.2019',
    currentStateOfUserJobApplication: 'Offer received',
    selectedChkBox: false,
  },
  {
    companyName: 'D Inc',
    contactPersonName: 'Melanie',
    userJobApplicationTitle: 'Unity3D game designer',
    dateOfJobApplicationWhenItWasSend: '10.04.2019',
    currentStateOfUserJobApplication: 'Offer received',
    selectedChkBox: false,
  },
  {
    companyName: 'E Inc',
    contactPersonName: 'Peter',
    userJobApplicationTitle: 'Java EE developer',
    dateOfJobApplicationWhenItWasSend: '09.04.2019',
    currentStateOfUserJobApplication: 'Rejected',
    selectedChkBox: false,
  },
  {
    companyName: 'F Inc',
    contactPersonName: 'Dilton',
    userJobApplicationTitle: 'Java Script developer',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    currentStateOfUserJobApplication: 'Offer received',
    selectedChkBox: false,
  },
  {
    companyName: 'G Inc',
    contactPersonName: 'Mike',
    userJobApplicationTitle: 'Java developer',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    currentStateOfUserJobApplication: 'Company checking cv',
    selectedChkBox: false,
  },
  {
    companyName: 'H Inc',
    contactPersonName: 'Maier',
    userJobApplicationTitle: 'C# developer',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    currentStateOfUserJobApplication: 'Rejected',
    selectedChkBox: false,
  },
  {
    companyName: 'I Inc',
    contactPersonName: 'Griffin',
    userJobApplicationTitle: 'Cobol developer',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    currentStateOfUserJobApplication: 'Offer received',
    selectedChkBox: false,
  },
  {
    companyName: 'K Inc',
    contactPersonName: 'Jax',
    userJobApplicationTitle: 'Flutter developer',
    dateOfJobApplicationWhenItWasSend: '01.02.2019',
    currentStateOfUserJobApplication: 'Offer received',
    selectedChkBox: false,
  },
];
