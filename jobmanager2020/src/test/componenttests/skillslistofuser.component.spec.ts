import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { SkillslistofuserComponent } from '../../app/components/skillslistofuser/skillslistofuser.component';

describe('SkillslistofuserComponent', () => {
  let component: SkillslistofuserComponent;
  let fixture: ComponentFixture<SkillslistofuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillslistofuserComponent],
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
        MatChipsModule,
        MatAutocompleteModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillslistofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create skillslistofuser component', () => {
    expect(component).toBeTruthy();
  });
});
