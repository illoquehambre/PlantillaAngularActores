import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PopularFilmComponent } from './components/popular-film/popular-film.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'popularFilms', component: PopularFilmComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
