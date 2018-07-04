import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { AuthManager } from './authmanager';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from './shared/shared.module';
import { CommonAppModule } from './common-app/common-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [

    SharedModule,
    CommonAppModule,

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
