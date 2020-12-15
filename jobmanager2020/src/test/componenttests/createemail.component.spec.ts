import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateemailComponent } from '../../app/components/createemail/createemail.component';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { stringify } from 'querystring';
describe('CreateemailComponent', () => {
  let createNewEmailComponent: CreateemailComponent;
  let fixture: ComponentFixture<CreateemailComponent>;
  let emailTopic: string;
  let emailBodyMessage: string;

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
    createNewEmailComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create create new email component', () => {
    expect(createNewEmailComponent).toBeTruthy();
  });

  it('case: topic of the email or the body text of the email are missing!', () => {
    expect(
      createNewEmailComponent.sendEmail(emailTopic, emailBodyMessage)
    ).toBeFalsy();
  });

  it('case: topic of the email or the body text of the email are present!', () => {
    emailTopic = 'application as softwaredeveloper';
    emailBodyMessage = 'simple test as introduction';
    expect(
      createNewEmailComponent.sendEmail(emailTopic, emailBodyMessage)
    ).toBeTruthy();
  });
});
