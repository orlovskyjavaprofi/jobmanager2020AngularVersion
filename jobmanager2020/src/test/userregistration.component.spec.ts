import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserregistrationComponent } from '../app/userregistration/userregistration.component';

describe('UserregistrationComponent', () => {
  let component: UserregistrationComponent;
  let fixture: ComponentFixture<UserregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserregistrationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component for new user registration', () => {
    expect(component).toBeTruthy();
  });
});
