import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemCarsPage } from './ejem-cars.page';

const routes: Routes = [
  {
    path: '',
    component: EjemCarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemCarsPageRoutingModule {}
