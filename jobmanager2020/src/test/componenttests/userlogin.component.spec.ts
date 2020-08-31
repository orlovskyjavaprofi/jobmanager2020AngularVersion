import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth-service.service';

import { UserloginComponent } from '../../app/components/userlogin/userlogin.component';

describe('UserloginComponent', () => {
  let loginComponent: UserloginComponent;
  let fixture: ComponentFixture<UserloginComponent>;

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
    fixture.detectChanges();
  });

  it('should create user login component', () => {
    expect(loginComponent).toBeTruthy();
  });

  //case: user click on button registration as result user should see new page registration!
});
