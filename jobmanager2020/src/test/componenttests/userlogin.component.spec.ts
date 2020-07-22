import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UserloginComponent } from '../../app/components/userlogin/userlogin.component';

describe('UserloginComponent', () => {
  let loginComponent: UserloginComponent;
  let fixture: ComponentFixture<UserloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserloginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
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
