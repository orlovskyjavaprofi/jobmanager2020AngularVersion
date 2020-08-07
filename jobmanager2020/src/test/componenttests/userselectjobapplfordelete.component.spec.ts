import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserselectjobapplfordeleteComponent } from '../../app/components/userselectjobapplfordelete/userselectjobapplfordelete.component';

describe('UserselectjobapplfordeleteComponent', () => {
  let component: UserselectjobapplfordeleteComponent;
  let fixture: ComponentFixture<UserselectjobapplfordeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserselectjobapplfordeleteComponent],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatRadioModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserselectjobapplfordeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user select job application for deletion', () => {
    expect(component).toBeTruthy();
  });
});
