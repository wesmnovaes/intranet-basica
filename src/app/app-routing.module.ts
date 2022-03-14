import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhaComponent } from './senha/senha.component';

const routes: Routes = [
  {path: '', component: SenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
