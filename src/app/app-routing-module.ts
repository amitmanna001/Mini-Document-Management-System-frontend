import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Upload } from './components/upload/upload';
import { Search } from './components/search/search';
import { App } from './app';

const routes: Routes = [
  {
    path: 'upload',
    component: Upload,
  },
  {
    path: 'search',
    component: Search
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
