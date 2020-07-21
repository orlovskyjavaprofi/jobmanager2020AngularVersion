import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AccountServiceService } from '../../app/services/account-service.service';
import { UserDetails } from '../../app/shared/model/userdetails';
import { UserEmploymentTypes } from '../../app/shared/model/usertypeemployments';

describe('AccountServiceService', () => {
  let service: AccountServiceService;
  let inputUserDetails: UserDetails;
  let inputUserEmploymentState: UserEmploymentTypes;

  let userFirstName: string;
  let userLastName: string;
  let userEmail: string;
  let userCityName: string;
  let userBirthDay: string;
  let userCountry: string;
  let userStreetNumber: string;
  let userStreetName: string;

  beforeEach(() => {
    userFirstName = 'user first name not set up!';
    userLastName = 'user last name not set up!';
    userEmail = 'user email not set up!';
    userCityName = 'New York';
    userBirthDay = '00.00.0000';
    userCountry = 'country name not set up!';
    userStreetNumber = '000000000';
    userStreetName = 'street name not set up!';
    inputUserEmploymentState = UserEmploymentTypes.Contractor;

    // tslint:disable-next-line: max-line-length
    inputUserDetails = new UserDetails(
      userFirstName,
      userLastName,
      userEmail,
      userCityName,
      userBirthDay,
      userCountry,
      userStreetNumber,
      userStreetName,
      inputUserEmploymentState
    );

    service = TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AccountServiceService],
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
