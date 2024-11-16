import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemiPage } from './semi.page';

const routes: Routes = [
  {
    path: '',
    component: SemiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemiPageRoutingModule {}
