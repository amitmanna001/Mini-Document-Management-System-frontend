import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Upload } from '../upload/upload';
import { Search } from '../search/search';
import { Mango } from './mango/mango';

const routes: Routes = [
  {
    path: 'upload',
    component: Upload,
  },
  {
    path: 'search',
    component: Search
  },
  {
    path: 'mango',
    component: Mango
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
