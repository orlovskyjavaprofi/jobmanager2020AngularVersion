import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompaniesmessagesComponent } from '../../app/components/viewcompaniesmessages/viewcompaniesmessages.component';

describe('ViewcompaniesmessagesComponent', () => {
  let component: ViewcompaniesmessagesComponent;
  let fixture: ComponentFixture<ViewcompaniesmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewcompaniesmessagesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcompaniesmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create view as valid user companie messages', () => {
    expect(component).toBeTruthy();
  });
});
