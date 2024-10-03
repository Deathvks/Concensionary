import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemCarsPageRoutingModule } from './ejem-cars-routing.module';

import { EjemCarsPage } from './ejem-cars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemCarsPageRoutingModule
  ],
  declarations: [EjemCarsPage]
})
export class EjemCarsPageModule {}
