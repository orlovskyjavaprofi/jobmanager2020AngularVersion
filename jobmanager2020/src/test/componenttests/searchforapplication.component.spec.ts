import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforapplicationComponent } from '../../app/components/searchforapplication/searchforapplication.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

describe('SearchforapplicationComponent', () => {
  let component: SearchforapplicationComponent;
  let fixture: ComponentFixture<SearchforapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchforapplicationComponent],
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
    fixture = TestBed.createComponent(SearchforapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create search for job application component', () => {
    expect(component).toBeTruthy();
  });
});
