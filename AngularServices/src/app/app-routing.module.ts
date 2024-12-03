import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindNewCarComponent } from './components/find-new-car/find-new-car.component';

const routes: Routes = [
  { path: 'newcar', component: FindNewCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
