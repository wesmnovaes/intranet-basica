import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhaComponent } from './senha/senha.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CrudSenhasComponent } from './senha/crud-senhas/crud-senhas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},  
  {path: 'login', component: LoginComponent},
  {path: 'senhas', component: SenhaComponent},
  {path: 'nova-senha', component: CrudSenhasComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
