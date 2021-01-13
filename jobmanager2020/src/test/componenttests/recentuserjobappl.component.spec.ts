import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentuserjobapplComponent } from '../../app/components/recentuserjobappl/recentuserjobappl.component';

describe('RecentuserjobapplComponent', () => {
  let component: RecentuserjobapplComponent;
  let fixture: ComponentFixture<RecentuserjobapplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentuserjobapplComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentuserjobapplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create recent user job application component', () => {
    expect(component).toBeTruthy();
  });
});
