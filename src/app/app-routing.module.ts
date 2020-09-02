import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {HelpComponent} from './help/help.component';
import {JobsComponent} from './jobs/jobs.component';
import {StoresComponent} from './stores/stores.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {SecurityComponent} from './security/security.component';
import {SigninComponent} from './signin/signin.component';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: 'help', component: HelpComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'stores', component: StoresComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'security', component: SecurityComponent},
  {path: 'sign-in', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
