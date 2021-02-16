import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysendmessagetouserComponent } from '../../app/components/companysendmessagetouser/companysendmessagetouser.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('CompanysendmessagetouserComponent', () => {
  let component: CompanysendmessagetouserComponent;
  let fixture: ComponentFixture<CompanysendmessagetouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanysendmessagetouserComponent],
      imports: [
        MatInputModule,
        MatStepperModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatSelectModule,
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatFormFieldModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanysendmessagetouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create company send message to user component', () => {
    expect(component).toBeTruthy();
  });
});
