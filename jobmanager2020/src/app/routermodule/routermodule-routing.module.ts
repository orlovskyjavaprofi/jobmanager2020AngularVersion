import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from '../components/userlogin/userlogin.component';
import { UserregistrationComponent } from '../components/userregistration/userregistration.component';
import { WelcomecomponentComponent } from '../components/welcomecomponent/welcomecomponent.component';
import { AppComponent } from '../main/app.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomecomponentComponent },
  { path: 'register', component: UserregistrationComponent },
  { path: 'login', component: UserloginComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutermoduleRoutingModule {}
