import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResetuserpasswordComponent } from '../../app/components/resetuserpassword/resetuserpassword.component';

describe('ResetuserpasswordComponent', () => {
  let component: ResetuserpasswordComponent;
  let fixture: ComponentFixture<ResetuserpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResetuserpasswordComponent],
      imports: [MatInputModule, MatFormFieldModule, BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetuserpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create reset user password component', () => {
    expect(component).toBeTruthy();
  });
});
