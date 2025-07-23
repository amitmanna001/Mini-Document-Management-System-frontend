import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  url = 'http://localhost:5114/files';
  constructor(private http: HttpClient) {}
  getPdf(filename: string) {
    return this.http.get(this.url + '/' + filename, { responseType: 'blob' });
  }
}
