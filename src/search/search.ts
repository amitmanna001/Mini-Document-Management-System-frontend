import { Component } from '@angular/core';
import { DataService } from '../Service/data-service';
import { PdfService } from './pdf-service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  items : any[]=[];
  pdfPath="/UPLOAD_FILES/";
  constructor(private dataService: DataService, private pdfService: PdfService){}
  ngOnInit() : void{
    this.dataService.getDocumentData()
    .subscribe((response)=>{
      this.items=response;
      console.log("Items count : "+this.items.length)
    })
  }
  viewPdf(filename : string): void {
    this.pdfService.getPdf(filename).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);       
        window.open(url, '_blank');
      },
      error: (err) => {
        console.error('Error loading PDF:', err);
      },
    });
  }
  openPdfInNewTab(pdfUrl: string): void {
    window.open(pdfUrl, '_blank');
  }
}
