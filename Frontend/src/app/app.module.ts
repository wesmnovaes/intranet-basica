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
import { ArtigosComponent } from './artigos/artigos.component';
import { CircularesComponent } from './circulares/circulares.component';
import { ConfigComponent } from './config/config.component';
import { CrudUsuarioComponent } from './config/crud-usuario/crud-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    SenhaComponent,
    CrudSenhasComponent,
    HomeComponent,
    LoginComponent,
    RedeComponent,
    CrudRedeComponent,
    ArtigosComponent,
    CircularesComponent,
    ConfigComponent,
    CrudUsuarioComponent
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
