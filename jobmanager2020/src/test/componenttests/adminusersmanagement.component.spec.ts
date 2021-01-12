import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusersmanagementComponent } from '../../app/components/adminusersmanagement/adminusersmanagement.component';

describe('AdminusersmanagementComponent', () => {
  let component: AdminusersmanagementComponent;
  let fixture: ComponentFixture<AdminusersmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminusersmanagementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusersmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component for admin view management of the users in the system', () => {
    expect(component).toBeTruthy();
  });
});
