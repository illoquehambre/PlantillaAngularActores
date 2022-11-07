import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieFavResponse } from '../interfaces/movie-fav.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFavMovie(page: number): Observable <MovieFavResponse>{
    let session_id : string = localStorage.getItem("session_id");
    return this.http.get<MovieFavResponse>(
      `${environment.apiBaseUrl}/account/0/favorite/movies?session_id=${session_id}&page=${page}&api_key=${environment.apiKey}`
    );
  }

}
