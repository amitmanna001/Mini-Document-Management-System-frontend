import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:5114/api/documents/getAll';
  private apiUrl_getItem = 'http://localhost:5114/api/documents';

  constructor(private http: HttpClient) {}
  getAllDocumentData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getItems(value: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl_getItem + '?value=' + value);
  }
}
