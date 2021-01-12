import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavsmtpmailsettingsComponent } from '../../app/components/savsmtpmailsettings/savsmtpmailsettings.component';

describe('SavsmtpmailsettingsComponent', () => {
  let component: SavsmtpmailsettingsComponent;
  let fixture: ComponentFixture<SavsmtpmailsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavsmtpmailsettingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavsmtpmailsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create save mail SMTP settings component', () => {
    expect(component).toBeTruthy();
  });
});
