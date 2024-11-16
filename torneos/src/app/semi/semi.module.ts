import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemiPageRoutingModule } from './semi-routing.module';

import { SemiPage } from './semi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemiPageRoutingModule
  ],
  declarations: [SemiPage]
})
export class SemiPageModule {}
