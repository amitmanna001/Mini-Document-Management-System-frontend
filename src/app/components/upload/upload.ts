import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.html',
  styleUrl: './upload.css'
})
export class Upload {
  selectedFile : File | null = null;

  constructor(private http : HttpClient){}
  onFileSeleted(event: any)
  {
    this.selectedFile = event.target.files[0];
  }

  onUpload()
  {
    if(this.selectedFile)
    {
      var formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      this.http.post('http://localhost:5114/api/documents/upload', formData)
      .subscribe(
        (response)=>{
          console.log('File uploaded successfully:', response);
          alert("File uploaded successfully");
        }
      )
    }
    else
    {
      console.warn('No file selected.');
    }
  }
}
