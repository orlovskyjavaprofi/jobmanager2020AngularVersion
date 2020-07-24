import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentjobapplicationsComponent } from '../../app/components/currentjobapplications/currentjobapplications.component';

describe('CurrentjobapplicationsComponent', () => {
  let component: CurrentjobapplicationsComponent;
  let fixture: ComponentFixture<CurrentjobapplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentjobapplicationsComponent],
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
