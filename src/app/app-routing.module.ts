import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhaComponent } from './senha/senha.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'senhas', component: SenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
