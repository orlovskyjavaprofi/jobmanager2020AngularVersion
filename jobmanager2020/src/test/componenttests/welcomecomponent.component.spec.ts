import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomecomponentComponent } from '../../app/components/welcomecomponent/welcomecomponent.component';

describe('WelcomecomponentComponent', () => {
  let welcomeComponent: WelcomecomponentComponent;
  let fixture: ComponentFixture<WelcomecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomecomponentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomecomponentComponent);
    welcomeComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create welcome component', () => {
    expect(welcomeComponent).toBeTruthy();
  });
});
