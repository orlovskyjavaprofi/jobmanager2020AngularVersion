import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysendmessagetouserComponent } from '../../app/components/companysendmessagetouser/companysendmessagetouser.component';

describe('CompanysendmessagetouserComponent', () => {
  let component: CompanysendmessagetouserComponent;
  let fixture: ComponentFixture<CompanysendmessagetouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanysendmessagetouserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanysendmessagetouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create company send message to user component', () => {
    expect(component).toBeTruthy();
  });
});
