import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Upload } from '../upload/upload';
import { Search } from '../search/search';

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
