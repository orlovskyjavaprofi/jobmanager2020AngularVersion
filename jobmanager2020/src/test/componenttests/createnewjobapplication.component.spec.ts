import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewjobapplicationComponent } from '../../app/components/createnewjobapplication/createnewjobapplication.component';

describe('CreatenewjobapplicationComponent', () => {
  let component: CreatenewjobapplicationComponent;
  let fixture: ComponentFixture<CreatenewjobapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatenewjobapplicationComponent],
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
