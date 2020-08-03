import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentjobapplicationsComponent } from '../../app/components/currentjobapplications/currentjobapplications.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('CurrentjobapplicationsComponent', () => {
  let component: CurrentjobapplicationsComponent;
  let fixture: ComponentFixture<CurrentjobapplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentjobapplicationsComponent],
      imports: [MatTableModule, MatPaginatorModule, BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentjobapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create current job applications component', () => {
    expect(component).toBeTruthy();
  });
});
