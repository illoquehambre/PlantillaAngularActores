import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film, FilmResponse } from '../interfaces/filmList.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilmDetailsResponse } from '../interfaces/filmDetails.interface';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private httpClient: HttpClient) { }

  getFilms(page: number): Observable<FilmResponse>{
    return this.httpClient.get<FilmResponse>(
      `${environment.API_BASE_URL}/movie/popular?api_key=${environment.api_key}&language=en-US&page=${page}`
    );
  }

  getFilmsDetails(film: Film): Observable<FilmDetailsResponse>{
    return this.httpClient.get<FilmDetailsResponse>(
      `${environment.API_BASE_URL}/movie/${film.id}?api_key=${environment.api_key}&language=en-US`
    );
  }
  getValoratedFilms(page: number): Observable<FilmResponse>{
    return this.httpClient.get<FilmResponse>(
      `${environment.API_BASE_URL}/account/${localStorage.getItem('account_id')}/rated/movies?api_key=${environment.api_key}&language=en-US&session_id=${localStorage.getItem('session_id')}&sort_by=created_at.asc&${page}`
    );
  }
}
