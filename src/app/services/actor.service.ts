import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor, ActorsResponse } from '../interfaces/actor.interface';
import { environment } from 'src/environments/environment';
import { ActorDetailResponse } from '../interfaces/actor-detail.interface';
import { MovieCreditsResponse } from '../interfaces/movie-credits.interface';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  getActors(page: number): Observable<ActorsResponse>{
   return this.http.get<ActorsResponse>(`${environment.apiBaseUrl}/person/popular?api_key=${environment.apiKey}&page=${page}`)
  }

  getActorDetail(actor: Actor): Observable<ActorDetailResponse>{
    return this.http.get<ActorDetailResponse>(`${environment.apiBaseUrl}/person/${actor.id}?api_key=${environment.apiKey}`)
  }
  getActorDetailById(id: string): Observable<ActorDetailResponse>{
    return this.http.get<ActorDetailResponse>(`${environment.apiBaseUrl}/person/${id}?api_key=${environment.apiKey}`)
  }
  getActorMovie(id: string): Observable<MovieCreditsResponse>{
    return this.http.get<MovieCreditsResponse>(`${environment.apiBaseUrl}/person/${id}/movie_credits?api_key=${environment.apiKey}`)
  }
}
