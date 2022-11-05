import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSessionDto } from '../modules/dto/create-session.dto';
import { CreateSessionResponse } from '../interfaces/create-session.interface';
import { RequestTokenResponse } from '../interfaces/request-token.interface';
import { DeleteSessionResponse } from '../interfaces/delete-session.interface';
import { DeleteSessionDto } from '../modules/dto/delete-session.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  createRequestToken(): Observable<RequestTokenResponse> {
    return this.http.get<RequestTokenResponse>(
      `${environment.API_BASE_URL}/authentication/token/new?api_key=${environment.api_key}`
    );
  }

  createSession(
    sessionDto: CreateSessionDto
  ): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(
      `${environment.API_BASE_URL}/authentication/session/new?api_key=${environment.api_key}`,
      sessionDto
    );
  }
  deleteSession(
    deleteSessionDto: DeleteSessionDto
  ): Observable<DeleteSessionResponse> {
    return this.http.delete<DeleteSessionResponse>(
      `${environment.API_BASE_URL}/authentication/session?api_key=${environment.api_key}`,
      {
        body: deleteSessionDto,
      }
    );
  }
}
