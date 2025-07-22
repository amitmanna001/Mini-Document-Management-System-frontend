import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mango',
  standalone: false,
  templateUrl: './mango.html',
  styleUrl: './mango.css'
})
export class Mango {
  constructor(private http: HttpClient){}
   base64toBlob = (base64Data: string, contentType: string) => {
    const sliceSize = 512;
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
  };

  // Example usage:
  // const base64PdfString = 'JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9Db2xvclNwYWNlL0...'; // Your Base64 string

  //pdfBlob = this.base64toBlob(base64PdfString, 'application/pdf');
}
