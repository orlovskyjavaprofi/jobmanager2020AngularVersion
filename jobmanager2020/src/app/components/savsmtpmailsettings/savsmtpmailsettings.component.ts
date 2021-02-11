import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SmtpPorts } from 'src/app/shared/model/smtpports.enum';
interface contractForSmtpPortsSelectionRepresentation {
  value: number;
  viewValue: string;
}

interface contractForUsageOfSecureSslTlsPort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-savsmtpmailsettings',
  templateUrl: './savsmtpmailsettings.component.html',
  styleUrls: ['./savsmtpmailsettings.component.css'],
})
export class SavsmtpmailsettingsComponent implements OnInit {
  constructor() {}

  UserChkBoxChekedForGDPR: boolean = false;

  smtpSettingSaveForm = new FormGroup({
    selSmtpPortFormControl: new FormControl(''),
    selUserSelectionForSecureSSLTLSFormControl: new FormControl(''),
    chkBoxUserConfirmReadGDPRFormControl: new FormControl('', [
      Validators.required,
      Validators.requiredTrue,
    ]),
    smtpHostFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4),
    ]),
    smtpUserNameFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4),
    ]),
    smtpUserPasswordFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4),
    ]),
  });

  selectionViewForDifferentSmtpEmailPorts: contractForSmtpPortsSelectionRepresentation[] = [
    {
      value: SmtpPorts.StandardMtaPort,
      viewValue: SmtpPorts.StandardMtaPort.toString(),
    },
    {
      value: SmtpPorts.SslTlsPort,
      viewValue: SmtpPorts.SslTlsPort.toString(),
    },
    {
      value: SmtpPorts.SslTlsAlternativePort,
      viewValue: SmtpPorts.SslTlsAlternativePort.toString(),
    },
    {
      value: SmtpPorts.SslPort,
      viewValue: SmtpPorts.SslPort.toString(),
    },
    {
      value: SmtpPorts.MsaPort,
      viewValue: SmtpPorts.MsaPort.toString(),
    },
  ];

  selectionViewForUsageOfSecureSslTlsPort: contractForUsageOfSecureSslTlsPort[] = [
    {
      value: 'Yes',
      viewValue: 'Yes',
    },
    {
      value: 'No',
      viewValue: 'No',
    },
  ];

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.debutOutput();
  }

  public resetsmtpSettingSaveForm(): void {
    this.smtpSettingSaveForm.reset({
      selSmtpPortFormControl: '',
      selUserSelectionForSecureSSLTLSFormControl: '',
      chkBoxUserConfirmReadGDPRFormControl: '',
      smtpHostFormControl: '',
      smtpUserNameFormControl: '',
      smtpUserPasswordFormControl: '',
    });
  }

  private debutOutput(): void {
    console.log(
      'Email server host: ' + this.smtpSettingSaveForm.value.smtpHostFormControl
    );
    console.log(
      'Email server port: ' +
        this.smtpSettingSaveForm.value.selSmtpPortFormControl
    );
    console.log(
      'SMTP user name: ' +
        this.smtpSettingSaveForm.value.smtpUserNameFormControl
    );
    console.log(
      'SMTP user password: ' +
        this.smtpSettingSaveForm.value.smtpUserNameFormControl
    );
    console.log(
      'Port 456 selected 2nd question ' +
        this.smtpSettingSaveForm.value
          .selUserSelectionForSecureSSLTLSFormControl
    );
    console.log(
      'Checkbox for GDPR checked? ' +
        this.smtpSettingSaveForm.value.chkBoxUserConfirmReadGDPRFormControl
    );
  }
}
