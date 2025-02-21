import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationTemplate } from '../model/notification.template.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationTemplateService {

  private baseUrl = 'https://your-api-url/notification/template'; // Base URL for the API

  constructor(private http: HttpClient) {}

  // Get all notification templates
  getAllTemplates(): Observable<NotificationTemplate[]> {
    return this.http.get<NotificationTemplate[]>(`${this.baseUrl}`);
  }

  // Get a specific notification template by ID
  getTemplateById(id: number): Observable<NotificationTemplate[]> {
    return this.http.get<NotificationTemplate[]>(`${this.baseUrl}/${id}`);
  }
}
