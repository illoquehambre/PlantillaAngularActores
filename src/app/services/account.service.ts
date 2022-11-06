import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountResponse } from '../interfaces/accountDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getDetails(sessionId: string): Observable<AccountResponse>{
    return this.http.get<AccountResponse>(
      `${environment.API_BASE_URL}/account?api_key=${environment.api_key}&session_id=${sessionId}`
    );
  }
}
