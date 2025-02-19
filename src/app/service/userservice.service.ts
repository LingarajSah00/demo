import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../model/user.model';  // Import the UserData model

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  // Get all users
  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.baseUrl);
  }

  // Search users based on path variable
  searchUser(pathVariable: string): Observable<UserData[]> {
    const searchUrl = `${this.baseUrl}/${pathVariable}`;
    return this.http.get<UserData[]>(searchUrl);
  }
}
