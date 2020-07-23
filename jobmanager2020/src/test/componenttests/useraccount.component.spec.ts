import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccountComponent } from '../../app/components/useraccount/useraccount.component';

describe('UseraccountComponent', () => {
  let component: UseraccountComponent;
  let fixture: ComponentFixture<UseraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UseraccountComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user account component', () => {
    expect(component).toBeTruthy();
  });
});
