import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegaldisclaimerComponent } from '../../app/components/legaldisclaimer/legaldisclaimer.component';

describe('LegaldisclaimerComponent', () => {
  let component: LegaldisclaimerComponent;
  let fixture: ComponentFixture<LegaldisclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LegaldisclaimerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegaldisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create legal disclaimer component', () => {
    expect(component).toBeTruthy();
  });
});
