import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Job manager 2020';

  _displayLogin = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authStatus.subscribe((authStatus) => {
      setTimeout(() => {
        this._displayLogin = authStatus.isAuthenticated;
      }, 0);
    });
  }

  get displayLogin() {
    return this._displayLogin;
  }
}
