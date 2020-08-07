import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrintviewofselectedjobapplComponent } from '../../app/components/printviewofselectedjobappl/printviewofselectedjobappl.component';

describe('PrintviewofselectedjobapplComponent', () => {
  let component: PrintviewofselectedjobapplComponent;
  let fixture: ComponentFixture<PrintviewofselectedjobapplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrintviewofselectedjobapplComponent],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatTableModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintviewofselectedjobapplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create print view of selected applications', () => {
    expect(component).toBeTruthy();
  });
});
