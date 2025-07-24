import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Upload } from './components/upload/upload';
import { Search } from './components/search/search';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Navbar } from './components/navbar/navbar';


@NgModule({
  declarations: [
    App,
    Upload,
    Search,
    Navbar  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }

