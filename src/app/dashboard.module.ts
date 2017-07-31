import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
];


@NgModule({
  imports: [CommonModule,
    ReactiveFormsModule, FormsModule, RouterModule.forChild(routes)],
  providers: [],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
