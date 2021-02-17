import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillslistofuserComponent } from '../../app/components/skillslistofuser/skillslistofuser.component';

describe('SkillslistofuserComponent', () => {
  let component: SkillslistofuserComponent;
  let fixture: ComponentFixture<SkillslistofuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillslistofuserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillslistofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create skillslistofuser component', () => {
    expect(component).toBeTruthy();
  });
});
