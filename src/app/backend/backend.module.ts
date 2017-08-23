import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Route[] = [
  {
    path: '', redirectTo: 'dash', pathMatch: 'full'
  },
  {
    path: 'dash', component: DashComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashComponent, NotFoundComponent]
})
export class BackendModule { }
