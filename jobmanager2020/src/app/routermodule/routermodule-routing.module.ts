import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegaldisclaimerComponent } from '../components/legaldisclaimer/legaldisclaimer.component';
import { UseraccountComponent } from '../components/useraccount/useraccount.component';
import { UserloginComponent } from '../components/userlogin/userlogin.component';
import { UserregistrationComponent } from '../components/userregistration/userregistration.component';
import { WelcomecomponentComponent } from '../components/welcomecomponent/welcomecomponent.component';
import { WrongurlerrorComponent } from '../components/wrongurlerror/wrongurlerror.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomecomponentComponent },
  { path: 'register', component: UserregistrationComponent },
  { path: 'login', component: UserloginComponent },
  { path: 'legal', component: LegaldisclaimerComponent },
  { path: 'useracn', component: UseraccountComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: WrongurlerrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutermoduleRoutingModule {}
