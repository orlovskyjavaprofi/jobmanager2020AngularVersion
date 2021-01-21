import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminUserAffiliation } from 'src/app/shared/model/adminuseraffiliation.enum';

import { RegisteradminuserComponent } from '../../app/components/registeradminuser/registeradminuser.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('RegisteradminuserComponent', () => {
  let component: RegisteradminuserComponent;
  let fixture: ComponentFixture<RegisteradminuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteradminuserComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteradminuserComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create register admin user component', () => {
    expect(component).toBeTruthy();
  });

  it('case user provided valid input for admin registration', () => {
    let adminFirstName: string = 'John';
    let adminLastName: string = 'Smith';
    let adminEmail: string = 'test@user.com';
    let adminOrga: AdminUserAffiliation = AdminUserAffiliation.NPO;
    let adminPassword: string = 'testpassword123556*';

    expect(
      component.registerUser(
        adminFirstName,
        adminLastName,
        adminEmail,
        adminOrga,
        adminPassword
      )
    ).toBe(true);
  });

  it('case user provided invalid input for admin registration', () => {
    let adminFirstName: string = '';
    let adminLastName: string = '';
    let adminEmail: string = '';
    let adminOrga: AdminUserAffiliation = AdminUserAffiliation.CLP;
    let adminPassword: string = '';

    expect(
      component.registerUser(
        adminFirstName,
        adminLastName,
        adminEmail,
        adminOrga,
        adminPassword
      )
    ).toBe(false);
  });
});
