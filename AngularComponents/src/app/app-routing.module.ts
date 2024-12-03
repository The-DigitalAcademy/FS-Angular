import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactMeComponent } from './Pages/contact-me/contact-me.component';
import { LandingComponent } from './components/landing/landing.component';
import { NewcarComponent } from './components/newcar/newcar.component';

const routes: Routes = [
  { path: 'nav', component: NavbarComponent },
  { path: 'callme', component: ContactMeComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'newcar', component: NewcarComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
