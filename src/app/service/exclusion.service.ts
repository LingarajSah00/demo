import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';  // Import environment
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ELTData } from '../model/elt.model';

@Injectable({
  providedIn: 'root'
})
export class ExclusionService {
  private apiUrl = `${environment}/campaigns`; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Create a new record (User or Maintenance)
  createRecord(data: ELTData): Observable<ELTData> {
    return this.http.post<ELTData>(this.apiUrl, data);
  }
}
