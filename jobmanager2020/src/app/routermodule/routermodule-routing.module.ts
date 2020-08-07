import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateemailComponent } from '../components/createemail/createemail.component';
import { CreatenewjobapplicationComponent } from '../components/createnewjobapplication/createnewjobapplication.component';
import { CurrentjobapplicationsComponent } from '../components/currentjobapplications/currentjobapplications.component';
import { LegaldisclaimerComponent } from '../components/legaldisclaimer/legaldisclaimer.component';
import { PrintviewofselectedjobapplComponent } from '../components/printviewofselectedjobappl/printviewofselectedjobappl.component';
import { ResetuserpasswordComponent } from '../components/resetuserpassword/resetuserpassword.component';
import { SearchforapplicationComponent } from '../components/searchforapplication/searchforapplication.component';
import { UseraccountComponent } from '../components/useraccount/useraccount.component';
import { UserloginComponent } from '../components/userlogin/userlogin.component';
import { UserregistrationComponent } from '../components/userregistration/userregistration.component';
import { UserselectjobapplfordeleteComponent } from '../components/userselectjobapplfordelete/userselectjobapplfordelete.component';
import { WelcomecomponentComponent } from '../components/welcomecomponent/welcomecomponent.component';
import { WrongurlerrorComponent } from '../components/wrongurlerror/wrongurlerror.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomecomponentComponent },
  { path: 'register', component: UserregistrationComponent },
  { path: 'login', component: UserloginComponent },
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
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: WrongurlerrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutermoduleRoutingModule {}
