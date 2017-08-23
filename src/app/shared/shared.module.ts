import {RoutingModule} from '../routing/routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, RoutingModule
  ],
  exports: [
    MaterialModule, FlexLayoutModule, RoutingModule
  ]
})
export class SharedModule { }
