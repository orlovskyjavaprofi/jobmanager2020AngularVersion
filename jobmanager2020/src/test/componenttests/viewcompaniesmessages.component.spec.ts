import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { ViewcompaniesmessagesComponent } from '../../app/components/viewcompaniesmessages/viewcompaniesmessages.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

describe('ViewcompaniesmessagesComponent', () => {
  let component: ViewcompaniesmessagesComponent;
  let fixture: ComponentFixture<ViewcompaniesmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcompaniesmessagesComponent],
      imports: [
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcompaniesmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create view as valid user company messages', () => {
    expect(component).toBeTruthy();
  });
});
