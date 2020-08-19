import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserregistrationComponent } from '../../app/components/userregistration/userregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserregistrationComponent', () => {
  let userRegistrationComponent: UserregistrationComponent;
  let fixture: ComponentFixture<UserregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserregistrationComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
      ],
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

  it('case: user input valid', () => {
    let input: string = 'test';
    expect(userRegistrationComponent.checkIfProvidedInputNotValid(input)).toBe(
      'test'
    );
  });

  it('case: user input invalid', () => {
    let input: string = '';
    expect(userRegistrationComponent.checkIfProvidedInputNotValid(input)).toBe(
      'undefined'
    );
  });

  it('case: user provided valid input for new registration', () => {
    let userfirstName: string = 'John';
    let userlastName: string = 'Smith';
    let userEmail: string = 'johnsmith@testmail.com';
    let userCity: string = 'New York';
    let userBirthDay: string = '10.01.1966';
    let userCountryName: string = 'USA';
    let userStreetNumber: string = '22';
    let userStreetName: string = 'Row street';

    expect(
      userRegistrationComponent.userProvidedInput(
        userfirstName,
        userlastName,
        userEmail,
        userCity,
        userBirthDay,
        userCountryName,
        userStreetNumber,
        userStreetName
      )
    ).toBe('new user should be created');
  });

  it('case: user provided invalid input no last name for new registration', () => {
    let userfirstName: string = 'John';
    let userlastName: string = '';
    let userEmail: string = 'johnsmith@testmail.com';
    let userCity: string = 'New York';
    let userBirthDay: string = '10.01.1966';
    let userCountryName: string = 'USA';
    let userStreetNumber: string = '22';
    let userStreetName: string = 'Row street';

    expect(
      userRegistrationComponent.userProvidedInput(
        userfirstName,
        userlastName,
        userEmail,
        userCity,
        userBirthDay,
        userCountryName,
        userStreetNumber,
        userStreetName
      )
    ).toBe('user was not created');
  });

  it('case: user provided invalid input no first name for new registration', () => {
    let userfirstName: string = '';
    let userlastName: string = 'dddd';
    let userEmail: string = 'johnsmith@testmail.com';
    let userCity: string = 'New York';
    let userBirthDay: string = '10.01.1966';
    let userCountryName: string = 'USA';
    let userStreetNumber: string = '22';
    let userStreetName: string = 'Row street';

    expect(
      userRegistrationComponent.userProvidedInput(
        userfirstName,
        userlastName,
        userEmail,
        userCity,
        userBirthDay,
        userCountryName,
        userStreetNumber,
        userStreetName
      )
    ).toBe('user was not created');
  });

  it('case: user provided invalid input no email for new registration', () => {
    let userfirstName: string = 'dddd';
    let userlastName: string = 'dddd';
    let userEmail: string = '';
    let userCity: string = 'New York';
    let userBirthDay: string = '10.01.1966';
    let userCountryName: string = 'USA';
    let userStreetNumber: string = '22';
    let userStreetName: string = 'Row street';

    expect(
      userRegistrationComponent.userProvidedInput(
        userfirstName,
        userlastName,
        userEmail,
        userCity,
        userBirthDay,
        userCountryName,
        userStreetNumber,
        userStreetName
      )
    ).toBe('user was not created');
  });

  it('case: user provided invalid input no birthday for new registration', () => {
    let userfirstName: string = 'dddd';
    let userlastName: string = 'dddd';
    let userEmail: string = 'test@yes.com';
    let userCity: string = 'New York';
    let userBirthDay: string = '';
    let userCountryName: string = 'USA';
    let userStreetNumber: string = '22';
    let userStreetName: string = 'Row street';

    expect(
      userRegistrationComponent.userProvidedInput(
        userfirstName,
        userlastName,
        userEmail,
        userCity,
        userBirthDay,
        userCountryName,
        userStreetNumber,
        userStreetName
      )
    ).toBe('user was not created');
  });

  it('case: user provided invalid input no country for new registration', () => {
    let userfirstName: string = 'dddd';
    let userlastName: string = 'dddd';
    let userEmail: string = 'test@yes.com';
    let userCity: string = 'New York';
    let userBirthDay: string = '12.01.2039';
    let userCountryName: string = '';
    let userStreetNumber: string = '22';
    let userStreetName: string = 'Row street';

    expect(
      userRegistrationComponent.userProvidedInput(
        userfirstName,
        userlastName,
        userEmail,
        userCity,
        userBirthDay,
        userCountryName,
        userStreetNumber,
        userStreetName
      )
    ).toBe('user was not created');
  });

  it('case: user provided invalid input no stree number for new registration', () => {
    let userfirstName: string = 'dddd';
    let userlastName: string = 'dddd';
    let userEmail: string = 'test@yes.com';
    let userCity: string = 'New York';
    let userBirthDay: string = '12.01.2039';
    let userCountryName: string = 'ddd';
    let userStreetNumber: string = '';
    let userStreetName: string = 'Row street';

    expect(
      userRegistrationComponent.userProvidedInput(
        userfirstName,
        userlastName,
        userEmail,
        userCity,
        userBirthDay,
        userCountryName,
        userStreetNumber,
        userStreetName
      )
    ).toBe('user was not created');
  });

  it('case: user provided invalid input no stree name for new registration', () => {
    let userfirstName: string = 'dddd';
    let userlastName: string = 'dddd';
    let userEmail: string = 'test@yes.com';
    let userCity: string = 'New York';
    let userBirthDay: string = '12.01.2039';
    let userCountryName: string = 'ddd';
    let userStreetNumber: string = 'ddd';
    let userStreetName: string = '';

    expect(
      userRegistrationComponent.userProvidedInput(
        userfirstName,
        userlastName,
        userEmail,
        userCity,

        userBirthDay,
        userCountryName,
        userStreetNumber,
        userStreetName
      )
    ).toBe('user was not created');
  });

  it('case: user provided invalid input no city name for new registration', () => {
    let userfirstName: string = 'dddd';
    let userlastName: string = 'dddd';
    let userEmail: string = 'test@yes.com';
    let userCity: string = '';
    let userBirthDay: string = '12.01.2039';
    let userCountryName: string = 'ddd';
    let userStreetNumber: string = 'ddd';
    let userStreetName: string = 'cool';

    expect(
      userRegistrationComponent.userProvidedInput(
        userfirstName,
        userlastName,
        userEmail,
        userCity,

        userBirthDay,
        userCountryName,
        userStreetNumber,
        userStreetName
      )
    ).toBe('user was not created');
  });

  it('case: user provided invalid input for all fields for new registration', () => {
    let userfirstName: string = '';
    let userlastName: string = '';
    let userEmail: string = '';
    let userCity: string = 'New York';
    let userBirthDay: string = '';
    let userCountryName: string = '';
    let userStreetNumber: string = '';
    let userStreetName: string = '';

    expect(
      userRegistrationComponent.userProvidedInput(
        userfirstName,
        userlastName,
        userEmail,
        userCity,
        userBirthDay,
        userCountryName,
        userStreetNumber,
        userStreetName
      )
    ).toBe('user was not created');
  });

  it('case: when onSubmit called without any valid input data', () => {
    expect(userRegistrationComponent.onSubmit('')).toBe(
      "user wasn't registered"
    );
  });
});
