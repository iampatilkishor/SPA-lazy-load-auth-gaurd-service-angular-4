import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthManager } from './authmanager';

const routes: Routes = [
  {
    path: 'dashboard', loadChildren: './dashboard.module#DashboardModule',
    canActivate: [AuthManager]
  },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class AppRoutingModule { }
