import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialImportsModule } from './modules/material-imports.module';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PopularFilmComponent } from './components/popular-film/popular-film.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ValoratedFilmsComponent } from './components/valorated-films/valorated-films.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularFilmComponent,
    FilmDetailsComponent,
    ValoratedFilmsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
