import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilmDetailsResponse } from '../interfaces/filmDetails.interface';
import { Film, FilmResponse } from '../interfaces/filmList.interface';
import { MovieFavResponse } from '../interfaces/movie-fav.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFavMovie(page: number): Observable <MovieFavResponse>{
    return this.http.get<MovieFavResponse>(
      `${environment.apiBaseUrl}/account/0/favorite/movies?session_id=${localStorage.getItem("session_id")}&page=${page}&api_key=${environment.apiKey}`
    );
  }
  getFilms(page: number): Observable<FilmResponse>{
    return this.http.get<FilmResponse>(
      `${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}&language=en-US&page=${page}`
    );
  }

  getFilmsDetails(film: string): Observable<FilmDetailsResponse>{
    return this.http.get<FilmDetailsResponse>(
      `${environment.apiBaseUrl}/movie/${film}?api_key=${environment.apiKey}&language=en-US`
    );
  }
  
  getValoratedFilms(page: number): Observable<FilmResponse>{
    return this.http.get<FilmResponse>(
      `${environment.apiBaseUrl}/account/${localStorage.getItem('account_id')}/rated/movies?api_key=${environment.apiKey}&language=en-US&session_id=${localStorage.getItem('session_id')}&sort_by=created_at.asc&${page}`
    );
  }

}
