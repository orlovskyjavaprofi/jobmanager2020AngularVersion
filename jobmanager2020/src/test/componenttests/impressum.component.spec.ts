import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumComponent } from '../../app/components/impressum/impressum.component';

describe('ImpressumComponent', () => {
  let component: ImpressumComponent;
  let fixture: ComponentFixture<ImpressumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpressumComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create impressum component', () => {
    expect(component).toBeTruthy();
  });
});
