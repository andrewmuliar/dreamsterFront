import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesPaths} from './_router/routes';

const routes: Routes = RoutesPaths;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
