import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserregistrationComponent } from '../../app/components/userregistration/userregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserregistrationComponent', () => {
  let userRegistrationComponent: UserregistrationComponent;
  let fixture: ComponentFixture<UserregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [UserregistrationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregistrationComponent);
    userRegistrationComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('case: should create component for new user registration', () => {
    expect(userRegistrationComponent).toBeTruthy();
  });

  // case user provided input for   userFirstName
  // case user provided input for   userLastName
  // case user provided input for   userEmail
  // case user provided input for   userCityName
  // case user provided input for   userBirthDay
  // case user provided input for   userCountry
  // case user provided input for   userStreetNumber
  // case user provided input for   userStreetName
  // case user provided input for   userEmploymentState

  // case user provided no input for   userFirstName
  // case user provided no input for   userLastName
  // case user provided no input for   userEmail
  // case user provided no input for   userCityName
  // case user provided no input for   userBirthDay
  // case user provided no input for   userCountry
  // case user provided no input for   userStreetNumber
  // case user provided no input for   userStreetName
  // case user provided no input for   userEmploymentState
});
