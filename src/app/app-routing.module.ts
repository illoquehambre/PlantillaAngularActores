import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PopularFilmComponent } from './components/popular-film/popular-film.component';
import { ValoratedFilmsComponent } from './components/valorated-films/valorated-films.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'popularFilms', component: PopularFilmComponent },
  { path: 'valoratedFilms', component: ValoratedFilmsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
