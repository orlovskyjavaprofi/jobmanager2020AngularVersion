import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongurlerrorComponent } from '../../app/components/wrongurlerror/wrongurlerror.component';

describe('WrongurlerrorComponent', () => {
  let component: WrongurlerrorComponent;
  let fixture: ComponentFixture<WrongurlerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WrongurlerrorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongurlerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create wrong url component', () => {
    expect(component).toBeTruthy();
  });
});
