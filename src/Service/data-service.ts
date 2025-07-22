import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5114/api/documents/getAll';

  constructor(private http : HttpClient) { }
  getDocumentData() : Observable<any[]>
  {
    return  this.http.get<any[]>(this.apiUrl);
  }
}
