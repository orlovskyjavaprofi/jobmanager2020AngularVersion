import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { SavsmtpmailsettingsComponent } from '../../app/components/savsmtpmailsettings/savsmtpmailsettings.component';

describe('SavsmtpmailsettingsComponent', () => {
  let component: SavsmtpmailsettingsComponent;
  let fixture: ComponentFixture<SavsmtpmailsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavsmtpmailsettingsComponent],
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
    fixture = TestBed.createComponent(SavsmtpmailsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create save mail SMTP settings component', () => {
    expect(component).toBeTruthy();
  });
});
