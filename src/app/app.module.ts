import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { ImportsMaterialModule } from './modules/imports-material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorListComponent,
    ActorDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImportsMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
