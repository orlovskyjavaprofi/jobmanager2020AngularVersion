import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './main/app.component';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
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
import { ResetuserpasswordComponent } from './components/resetuserpassword/resetuserpassword.component';
import { UserselectjobapplfordeleteComponent } from './components/userselectjobapplfordelete/userselectjobapplfordelete.component';
import { AuthService } from './services/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminusersmanagementComponent } from './components/adminusersmanagement/adminusersmanagement.component';

import { ViewcompaniesmessagesComponent } from './components/viewcompaniesmessages/viewcompaniesmessages.component';
import { CompanysendmessagetouserComponent } from './components/companysendmessagetouser/companysendmessagetouser.component';
import { SavsmtpmailsettingsComponent } from './components/savsmtpmailsettings/savsmtpmailsettings.component';
import { UserresetpasswordComponent } from './components/userresetpassword/userresetpassword.component';
import { RecentuserjobapplComponent } from './components/recentuserjobappl/recentuserjobappl.component';
import { UsergreetingtextsmanagerComponent } from './components/usergreetingtextsmanager/usergreetingtextsmanager.component';
import { RegisteradminuserComponent } from './components/registeradminuser/registeradminuser.component';
import { MatSelectModule } from '@angular/material/select';

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
    ResetuserpasswordComponent,
    UserselectjobapplfordeleteComponent,
    AdminusersmanagementComponent,
    RegisteradminuserComponent,
    ViewcompaniesmessagesComponent,
    CompanysendmessagetouserComponent,
    SavsmtpmailsettingsComponent,
    UserresetpasswordComponent,
    RecentuserjobapplComponent,
    UsergreetingtextsmanagerComponent,
  ],
  imports: [
    HttpClientModule,
    MatMenuModule,
    MatCheckboxModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    MatSelectModule,
  ],
  providers: [
    AuthService,
    InmemorydbServiceService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
