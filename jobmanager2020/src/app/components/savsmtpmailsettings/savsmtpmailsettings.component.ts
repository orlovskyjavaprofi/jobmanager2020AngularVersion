import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SmtpPorts } from 'src/app/shared/model/smtpports.enum';
interface contractForSmtpPortsSelectionRepresentation {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-savsmtpmailsettings',
  templateUrl: './savsmtpmailsettings.component.html',
  styleUrls: ['./savsmtpmailsettings.component.css'],
})
export class SavsmtpmailsettingsComponent implements OnInit {
  constructor() {}
  smtpSettingSaveForm = new FormGroup({
    selSmtpEmailFormControl: new FormControl(''),
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

  ngOnInit(): void {}
}
