import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicionesPageRoutingModule } from './mediciones-routing.module';
import { MedicionesPage } from './mediciones.page';
import { CambiarColorBackgroundDirective } from '../../directivas/cambiar-color-background.directive'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicionesPageRoutingModule,
  ],
  declarations: [MedicionesPage,
                 CambiarColorBackgroundDirective]
})
export class MedicionesPageModule {}
