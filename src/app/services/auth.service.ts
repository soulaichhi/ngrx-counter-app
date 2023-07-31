import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {AuthResponseData} from "../models/auth-response-data.model";
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`,
      {email, password, returnSecureToken: true})
  }

  formatUser(data: AuthResponseData) {
    const expirationDate: Date = new Date(new Date().getTime() + +data.expiresIn * 1000);
    const user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email not found'
      case 'INVALID_PASSWORD':
        return 'Invalid password'
      default:
        return 'Unknown Error'
    }
  }
}
