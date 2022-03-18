import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhaComponent } from './senha/senha.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CrudSenhasComponent } from './senha/crud-senhas/crud-senhas.component';
import { RedeComponent } from './rede/rede.component';
import { CrudRedeComponent } from './rede/crud-rede/crud-rede.component';

const routes: Routes = [
  {path: '', component: HomeComponent},  
  {path: 'login', component: LoginComponent},
  {path: 'rede', component: RedeComponent},
  {path: 'nova-rede', component: CrudRedeComponent},
  {path: 'senhas', component: SenhaComponent},
  {path: 'nova-senha', component: CrudSenhasComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
