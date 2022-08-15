import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Regra3Component } from './components/regra3/regra3.component';

const routes: Routes = [
  { path: '', component: Regra3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
