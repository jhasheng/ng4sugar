import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashComponent } from './dash/dash.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Route[] = [
  {
    path: '', redirectTo: 'dash', pathMatch: 'full'
  },
  {
    path: 'dash', component: DashComponent
  }
];

@NgModule({
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [DashComponent, NotFoundComponent]
})
export class BackendModule { }
