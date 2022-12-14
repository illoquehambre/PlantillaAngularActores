import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSessionDto } from '../dto/create-session.dto';
import { DeleteSessionDto } from '../dto/delete-session.dto';
import { AccountdetailResponse } from '../interfaces/account-detail.interface';
import { CreateSessionResponse } from '../interfaces/create-session.interface';
import { DeleteSessionResponse } from '../interfaces/delete-session.interface';
import { RequestTokenResponse } from '../interfaces/request-token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createRequest(): Observable<RequestTokenResponse>{
    return this.http.get<RequestTokenResponse>(
      `${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`
    );
  }
  createSession(
    sessionDto: CreateSessionDto
  ): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(
      `${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`,
      sessionDto
    );
  }

  deleteSession(
    deleteSessionDto: DeleteSessionDto
  ): Observable<DeleteSessionResponse> {
    return this.http.request<DeleteSessionResponse>('delete',
      `${environment.apiBaseUrl}/authentication/session?api_key=${environment.apiKey}`,
      {
        body: deleteSessionDto,
      }
    );
  }
  getAccountDetail(session: string): Observable<AccountdetailResponse>{
    return this.http.get<AccountdetailResponse>(`${environment.apiBaseUrl}/account?session_id=${session}&${environment.apiKey}`)

  }


}
