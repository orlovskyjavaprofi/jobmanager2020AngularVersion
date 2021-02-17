import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { CreatenewjobapplicationComponent } from '../../app/components/createnewjobapplication/createnewjobapplication.component';

describe('CreatenewjobapplicationComponent', () => {
  let component: CreatenewjobapplicationComponent;
  let fixture: ComponentFixture<CreatenewjobapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatenewjobapplicationComponent],
      imports: [
        MatInputModule,
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
    fixture = TestBed.createComponent(CreatenewjobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component create new job application', () => {
    expect(component).toBeTruthy();
  });
});
