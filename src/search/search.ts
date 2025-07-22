import { Component } from '@angular/core';
import { DataService } from '../Service/data-service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  items : any[]=[];
  pdfPath="/UPLOAD_FILES/";
  constructor(private dataService: DataService){}
  ngOnInit() : void{
    this.dataService.getDocumentData()
    .subscribe((response)=>{
      this.items=response;
      console.log("Items count : "+this.items.length)
    })
  }
  viewPdf(filename : string): void {
    const fullPath = this.pdfPath + filename;
    this.openPdfInNewTab(fullPath);
    console.log("Opening: " + fullPath);
  }
  openPdfInNewTab(pdfUrl: string): void {
    window.open(pdfUrl, '_blank');
  }
}
