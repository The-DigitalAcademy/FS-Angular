import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NewCarComponent } from './components/new-car/new-car.component';

const routes: Routes = [
  { path: 'nav', component: NavbarComponent },
  { path: 'newcar', component: NewCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
