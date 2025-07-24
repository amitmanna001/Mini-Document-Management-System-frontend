import { Component } from '@angular/core';
import { DataService } from '../../Service/data-service';
import { PdfService } from '../../Service/pdf-service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  items : any[]=[];
  searchItem : string='';
  constructor(private dataService: DataService, private pdfService: PdfService){}
  ngOnInit() : void{
    this.dataService.getAllDocumentData()
    .subscribe({
      next: (response)=>{
        this.items=response;
        console.log("Items count : "+this.items.length)
      },
      error: (err)=>{
        console.error( err);
      }
    })
  }
  viewPdf(filename : string): void {
    if(filename!=null)
    {
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
    else
    {
      console.error('pdf is empty');
    }
  }
  findItem() {    
      this.dataService.getItems(this.searchItem).subscribe({
        next:(res)=>{
          this.items = res;
        },
        error: (err) => {
          console.error('Failed to getItem: ', err);
        }
      })    
  }
}
