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
    if (Object.is(this.validateUserInputForNewJobApplAndStoreInmem(), true)) {
      this.debutOutput();
    }
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

  validateUserInputForNewJobApplAndStoreInmem(): boolean {
    //Case 0 user provided valid input, meaning all fieldes are populated
    //Case 1 user provided port 465 and confirmation that user selected port 465
    //Case 2 user provided other port and confirmation that user selected port 465
    //Case 3 user provided other port and decline that user selected port 465

    let result: boolean = false;

    let checkForUserSmtpHostInput: boolean =
      this.smtpSettingSaveForm.value.smtpHostFormControl.length > 0 &&
      this.smtpSettingSaveForm.value.smtpHostFormControl != null;

    let checkForUserSmtpPortInput: boolean =
      this.smtpSettingSaveForm.value.selSmtpPortFormControl.toString().length >
        0 && this.smtpSettingSaveForm.value.selSmtpPortFormControl != null;

    let checkForUserSmtpNameInput: boolean =
      this.smtpSettingSaveForm.value.smtpUserNameFormControl.length > 0 &&
      this.smtpSettingSaveForm.value.smtpUserNameFormControl != null;

    let checkForUserSmtpPasswordInput: boolean =
      this.smtpSettingSaveForm.value.smtpUserPasswordFormControl.length > 0 &&
      this.smtpSettingSaveForm.value.smtpUserPasswordFormControl != null;

    let checkForUserSecureSSLTLSPortInput: boolean =
      this.smtpSettingSaveForm.value.selUserSelectionForSecureSSLTLSFormControl
        .length > 0 &&
      this.smtpSettingSaveForm.value
        .selUserSelectionForSecureSSLTLSFormControl != null;

    let checkForUserGDPRCheckboxInput: boolean = this.smtpSettingSaveForm.value
      .chkBoxUserConfirmReadGDPRFormControl;

    result = this.validateThatUserProvidedNotNullInput(
      checkForUserSmtpHostInput,
      checkForUserSmtpPortInput,
      checkForUserSmtpNameInput,
      checkForUserSmtpPasswordInput,
      checkForUserSecureSSLTLSPortInput,
      checkForUserGDPRCheckboxInput
    );

    if (Object.is(result, true)) {
      result = this.validateThatUserProvidedPortSslTlsAndCheckedYes();
      if (Object.is(result, false)) {
        result = this.validateThatUserProvidedNotSslTlsPortAndCheckedNo();
      }
    }

    return result;
  }

  private validateThatUserProvidedNotNullInput(
    userSmtpHostInput: boolean,
    userSmtpPortInput: boolean,
    forUserSmtpNameInput: boolean,
    userSmtpPasswordInput: boolean,
    forUserSecureSSLTLSPortInput: boolean,
    userGDPRCheckboxInput: boolean
  ): boolean {
    let result: boolean = false;
    if (
      Object.is(userSmtpHostInput, true) &&
      Object.is(userSmtpPortInput, true) &&
      Object.is(forUserSmtpNameInput, true) &&
      Object.is(userSmtpPasswordInput, true) &&
      Object.is(forUserSecureSSLTLSPortInput, true) &&
      Object.is(userGDPRCheckboxInput, true)
    ) {
      result = true;
    }

    return result;
  }

  private validateThatUserProvidedPortSslTlsAndCheckedYes(): boolean {
    let result: boolean = false;

    if (
      Object.is(
        this.smtpSettingSaveForm.value.selSmtpPortFormControl.toString(),
        '465'
      ) &&
      Object.is(
        this.smtpSettingSaveForm.value.selUserSelectionForSecureSSLTLSFormControl.toString(),
        'Yes'
      )
    ) {
      result = true;
    }

    return result;
  }

  private validateThatUserProvidedNotSslTlsPortAndCheckedNo(): boolean {
    let result: boolean = false;

    if (
      this.smtpSettingSaveForm.value.selSmtpPortFormControl.toString() !=
        '465' &&
      this.smtpSettingSaveForm.value.selUserSelectionForSecureSSLTLSFormControl.toString() ===
        'No'
    ) {
      result = true;
    }

    return result;
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
