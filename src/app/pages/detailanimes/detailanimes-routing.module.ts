import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailanimesPage } from './detailanimes.page';

const routes: Routes = [
  {
    path: '',
    component: DetailanimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailanimesPageRoutingModule {}
