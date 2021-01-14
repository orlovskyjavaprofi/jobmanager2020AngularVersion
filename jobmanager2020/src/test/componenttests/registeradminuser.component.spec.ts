import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteradminuserComponent } from '../../app/components/registeradminuser/registeradminuser.component';

describe('RegisteradminuserComponent', () => {
  let component: RegisteradminuserComponent;
  let fixture: ComponentFixture<RegisteradminuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteradminuserComponent],
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
});
