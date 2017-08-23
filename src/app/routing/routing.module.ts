import {RouterModule, Route} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";


const routes: Route[] = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'backend', loadChildren: './../backend/backend.module#BackendModule'
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes, { useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
