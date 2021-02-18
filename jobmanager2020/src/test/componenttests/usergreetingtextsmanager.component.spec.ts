import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { UsergreetingtextsmanagerComponent } from '../../app/components/usergreetingtextsmanager/usergreetingtextsmanager.component';

describe('UsergreetingtextsmanagerComponent', () => {
  let component: UsergreetingtextsmanagerComponent;
  let fixture: ComponentFixture<UsergreetingtextsmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsergreetingtextsmanagerComponent],
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
    fixture = TestBed.createComponent(UsergreetingtextsmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user greeting texts manager', () => {
    expect(component).toBeTruthy();
  });
});
