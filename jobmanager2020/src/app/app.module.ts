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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CdkTableModule } from '@angular/cdk/table';
import { CreatenewjobapplicationComponent } from './components/createnewjobapplication/createnewjobapplication.component';
import { MatInputModule } from '@angular/material/input';
import { CreateemailComponent } from './components/createemail/createemail.component';
import { MatRadioModule } from '@angular/material/radio';
import { SearchforapplicationComponent } from './components/searchforapplication/searchforapplication.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PrintviewofselectedjobapplComponent } from './components/printviewofselectedjobappl/printviewofselectedjobappl.component';
import { MatMenuModule } from '@angular/material/menu';
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
    CreatenewjobapplicationComponent,
    CreateemailComponent,
    SearchforapplicationComponent,
    PrintviewofselectedjobapplComponent,
  ],
  imports: [
    MatMenuModule,
    MatCheckboxModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutermoduleModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatInputModule,
    MatRadioModule,
  ],
  providers: [
    AccountServiceService,
    InmemorydbServiceService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
