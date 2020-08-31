import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateemailComponent } from '../../app/components/createemail/createemail.component';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('CreateemailComponent', () => {
  let component: CreateemailComponent;
  let fixture: ComponentFixture<CreateemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateemailComponent],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatRadioModule,
        HttpClientTestingModule,
      ],
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
