import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, SharedModule, RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
