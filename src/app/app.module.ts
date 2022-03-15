import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenhaComponent } from './senha/senha.component';
import { CrudSenhasComponent } from './senha/crud-senhas/crud-senhas.component';

@NgModule({
  declarations: [
    AppComponent,
    SenhaComponent,
    CrudSenhasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
