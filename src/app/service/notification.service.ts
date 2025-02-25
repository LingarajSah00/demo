import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ELTData } from '../model/elt.model';
import { Setting } from '../model/setting.model';
import { ListOption } from '../model/list-option.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl = 'http://localhost:8080/notification/personexception/'; // Change to your actual API base URL
  private settingApiUrl = 'http://localhost:8080/notification/setting/'; // Change to your actual API base URL
  private listOptionUrl = 'http://localhost:8080/notification/listoption/'; // New API endpoint for list options

  constructor(private http: HttpClient) { }

  // Get all person exceptions
  getPersonExceptions(): Observable<ELTData[]> {
    return this.http.get<ELTData[]>(this.apiUrl);
  }

  // Get person exception by username
  getPersonExceptionByUsername(username: string): Observable<ELTData[]> {
    const url = `${this.apiUrl}/${username}`;
    return this.http.get<ELTData[]>(url);
  }

  // Fetch all settings, using the Setting model
  getAllSettings(): Observable<Setting[]> {
    return this.http.get<Setting[]>(this.settingApiUrl);
  }

  // Fetch a setting by name, using the Setting model
  getSettingByName(name: string): Observable<Setting> {
    return this.http.get<Setting>(`${this.settingApiUrl}/${name}`);
  }

  getAllListOptions(): Observable<ListOption[]> {
    return this.http.get<ListOption[]>(this.listOptionUrl); // Fetch list options
  }

  getListOptionByName(name: string): Observable<ListOption> {
    return this.http.get<ListOption>(`${this.listOptionUrl}/${name}`); // Fetch a specific list option by name
  }

}
