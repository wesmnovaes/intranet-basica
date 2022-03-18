import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenhaComponent } from './senha/senha.component';
import { CrudSenhasComponent } from './senha/crud-senhas/crud-senhas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RedeComponent } from './rede/rede.component';
import { CrudRedeComponent } from './rede/crud-rede/crud-rede.component';

@NgModule({
  declarations: [
    AppComponent,
    SenhaComponent,
    CrudSenhasComponent,
    HomeComponent,
    LoginComponent,
    RedeComponent,
    CrudRedeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
