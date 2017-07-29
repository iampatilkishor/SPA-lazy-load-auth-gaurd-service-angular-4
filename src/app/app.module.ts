import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthManager } from './authmanager';
import { ModalModule } from 'ngx-bootstrap';
import { Component, TemplateRef } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [AuthManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
