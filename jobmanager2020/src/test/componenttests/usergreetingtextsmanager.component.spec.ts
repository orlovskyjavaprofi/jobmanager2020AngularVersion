import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergreetingtextsmanagerComponent } from '../../app/components/usergreetingtextsmanager/usergreetingtextsmanager.component';

describe('UsergreetingtextsmanagerComponent', () => {
  let component: UsergreetingtextsmanagerComponent;
  let fixture: ComponentFixture<UsergreetingtextsmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsergreetingtextsmanagerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergreetingtextsmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user greeting texts manager', () => {
    expect(component).toBeTruthy();
  });
});
