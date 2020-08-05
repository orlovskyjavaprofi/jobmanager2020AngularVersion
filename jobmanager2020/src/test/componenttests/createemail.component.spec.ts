import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemailComponent } from '../../app/components/createemail/createemail.component';

describe('CreateemailComponent', () => {
  let component: CreateemailComponent;
  let fixture: ComponentFixture<CreateemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateemailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create create new email component', () => {
    expect(component).toBeTruthy();
  });
});
