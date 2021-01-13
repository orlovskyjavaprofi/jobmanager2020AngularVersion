import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserresetpasswordComponent } from '../../app/components/userresetpassword/userresetpassword.component';

describe('UserresetpasswordComponent', () => {
  let component: UserresetpasswordComponent;
  let fixture: ComponentFixture<UserresetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserresetpasswordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserresetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user reset password component', () => {
    expect(component).toBeTruthy();
  });
});
