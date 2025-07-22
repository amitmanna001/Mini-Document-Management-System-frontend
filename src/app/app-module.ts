import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Upload } from '../upload/upload';
import { Search } from '../search/search';
import { provideHttpClient } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Mango } from './mango/mango';

@NgModule({
  declarations: [
    App,
    Upload,
    Search,
    Mango    
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }

