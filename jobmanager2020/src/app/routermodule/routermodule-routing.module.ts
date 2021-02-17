import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminusersmanagementComponent } from '../components/adminusersmanagement/adminusersmanagement.component';
import { CompanysendmessagetouserComponent } from '../components/companysendmessagetouser/companysendmessagetouser.component';
import { CreateemailComponent } from '../components/createemail/createemail.component';
import { CreatenewjobapplicationComponent } from '../components/createnewjobapplication/createnewjobapplication.component';
import { CurrentjobapplicationsComponent } from '../components/currentjobapplications/currentjobapplications.component';
import { LegaldisclaimerComponent } from '../components/legaldisclaimer/legaldisclaimer.component';
import { PrintviewofselectedjobapplComponent } from '../components/printviewofselectedjobappl/printviewofselectedjobappl.component';
import { RecentuserjobapplComponent } from '../components/recentuserjobappl/recentuserjobappl.component';
import { RegisteradminuserComponent } from '../components/registeradminuser/registeradminuser.component';
import { ResetuserpasswordComponent } from '../components/resetuserpassword/resetuserpassword.component';
import { SavsmtpmailsettingsComponent } from '../components/savsmtpmailsettings/savsmtpmailsettings.component';
import { SearchforapplicationComponent } from '../components/searchforapplication/searchforapplication.component';
import { UseraccountComponent } from '../components/useraccount/useraccount.component';
import { UsergreetingtextsmanagerComponent } from '../components/usergreetingtextsmanager/usergreetingtextsmanager.component';
import { UserloginComponent } from '../components/userlogin/userlogin.component';
import { UserregistrationComponent } from '../components/userregistration/userregistration.component';
import { UserresetpasswordComponent } from '../components/userresetpassword/userresetpassword.component';
import { UserselectjobapplfordeleteComponent } from '../components/userselectjobapplfordelete/userselectjobapplfordelete.component';
import { ViewcompaniesmessagesComponent } from '../components/viewcompaniesmessages/viewcompaniesmessages.component';
import { WelcomecomponentComponent } from '../components/welcomecomponent/welcomecomponent.component';
import { WrongurlerrorComponent } from '../components/wrongurlerror/wrongurlerror.component';
import { ImpressumComponent } from '../components/impressum/impressum.component';
import { SkillslistofuserComponent } from '../components/skillslistofuser/skillslistofuser.component';
const routes: Routes = [
  { path: 'welcome', component: WelcomecomponentComponent },
  { path: 'register', component: UserregistrationComponent },
  { path: 'login', component: UserloginComponent },
  { path: 'login/:redirectUrl', component: UserloginComponent },
  { path: 'legal', component: LegaldisclaimerComponent },
  { path: 'useracn', component: UseraccountComponent },
  { path: 'currentjobapps', component: CurrentjobapplicationsComponent },
  { path: 'createnewjobappl', component: CreatenewjobapplicationComponent },
  { path: 'createnewemailfromjobappl', component: CreateemailComponent },
  {
    path: 'printviewofselectedtimeline',
    component: PrintviewofselectedjobapplComponent,
  },
  {
    path: 'searchforajobapplication',
    component: SearchforapplicationComponent,
  },
  { path: 'resetuserpasswd', component: ResetuserpasswordComponent },
  {
    path: 'userselectjobapplfordel',
    component: UserselectjobapplfordeleteComponent,
  },
  {
    path: 'registeruseradmin',
    component: RegisteradminuserComponent,
  },
  {
    path: 'messagesofcompanies',
    component: ViewcompaniesmessagesComponent,
  },
  {
    path: 'sendmessagetocandidate',
    component: CompanysendmessagetouserComponent,
  },

  {
    path: 'savemailsettings',
    component: SavsmtpmailsettingsComponent,
  },
  {
    path: 'validuserresetpassword',
    component: UserresetpasswordComponent,
  },

  {
    path: 'recentuserjobappl',
    component: RecentuserjobapplComponent,
  },
  {
    path: 'usergreetingtextsmanager',
    component: UsergreetingtextsmanagerComponent,
  },
  {
    path: 'userskillslist',
    component: SkillslistofuserComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'admusersmgmt',
    component: AdminusersmanagementComponent,
  },
  { path: '**', component: WrongurlerrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class RoutermoduleRoutingModule {}
