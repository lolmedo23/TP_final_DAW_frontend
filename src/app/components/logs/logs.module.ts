import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogsPageRoutingModule } from './logs-routing.module';
import { EstadoElectrovalvulaPipe } from '../../pipes/estado-electrovalvula.pipe'
import { LogsPage } from './logs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogsPageRoutingModule
  ],
  declarations: [LogsPage,
                EstadoElectrovalvulaPipe]
})
export class LogsPageModule {}
