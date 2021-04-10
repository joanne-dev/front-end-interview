import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';


const routes: Routes = [
    {path: '', redirectTo: 'landing/overview', pathMatch: 'full'},
    {path: 'landing', redirectTo: 'landing/overview', pathMatch: 'full'},
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
