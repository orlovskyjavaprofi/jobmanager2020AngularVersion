import { InmemorydbServiceService } from './../../app/services/inmemorydb-service.service';
import { UseraccountComponent } from './../../app/components/useraccount/useraccount.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth-service.service';
import { UserloginComponent } from '../../app/components/userlogin/userlogin.component';
import { UserCridentials } from '../../app/shared/model/usercridentials';
import { UserDetails } from '../../app/shared/model/userdetails';
import { UserEmploymentTypes } from 'src/app/shared/model/usertypeemployments';

describe('UserloginComponent', () => {
  let loginComponent: UserloginComponent;
  let fixture: ComponentFixture<UserloginComponent>;
  let testUserCridentials: UserCridentials;
  let inMemService: InmemorydbServiceService;
  let validUserDetails: UserDetails;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserloginComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [AuthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginComponent);
    loginComponent = fixture.componentInstance;
    testUserCridentials = new UserCridentials( 'John', '123456');

    let userFirstName: string = 'John';
    let userLastName: string = 'Smith';
    let userEmail: string = 'testuser@test.com';
    let userCityName: string = 'New York';
    let userBirthDay: string = '15.07.1995';
    let userCountry: string = 'USA';
    let userStreetNumber: string = 'Washington avenue';
    let userStreetName: string = '4';
    let userEmploymentState: UserEmploymentTypes;

    validUserDetails  = new UserDetails(
      userFirstName,
      userLastName,
      userEmail,
      userCityName,
      userBirthDay,
      userCountry,
      userStreetNumber,
      userStreetName,
      userEmploymentState);

    inMemService = new InmemorydbServiceService();
    inMemService.saveUserToMemory(validUserDetails,'superduperpassword001');
    fixture.detectChanges();
  });

  it('should create user login component', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('invalid user not allowed to login', () => {
    const validUserCridentialsSet: Set<UserCridentials> = inMemService.getInMemDBUserCridentials();
    expect(loginComponent.validateUserForLogin(testUserCridentials, validUserCridentialsSet)).toBeFalsy();
  });

  it('valid user should be allowed to login', () => {
    const validUserCridentialsSet: Set<UserCridentials> = inMemService.getInMemDBUserCridentials();
    const result: UserCridentials = [...validUserCridentialsSet][0];

    expect(loginComponent.validateUserForLogin(result, validUserCridentialsSet)).toBeTruthy();
  });

});
