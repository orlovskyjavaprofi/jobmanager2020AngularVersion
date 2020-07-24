import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './main/app.component';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
import { AccountServiceService } from './services/account-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InmemorydbServiceService } from './services/inmemorydb-service.service';
import { RoutermoduleModule } from './routermodule/routermodule.module';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { WelcomecomponentComponent } from './components/welcomecomponent/welcomecomponent.component';
import { WrongurlerrorComponent } from './components/wrongurlerror/wrongurlerror.component';
import { LegaldisclaimerComponent } from './components/legaldisclaimer/legaldisclaimer.component';
import { UseraccountComponent } from './components/useraccount/useraccount.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CurrentjobapplicationsComponent } from './components/currentjobapplications/currentjobapplications.component';
@NgModule({
  declarations: [
    AppComponent,
    UserregistrationComponent,
    UserloginComponent,
    WelcomecomponentComponent,
    WrongurlerrorComponent,
    LegaldisclaimerComponent,
    UseraccountComponent,
    CurrentjobapplicationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutermoduleModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [AccountServiceService, InmemorydbServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
