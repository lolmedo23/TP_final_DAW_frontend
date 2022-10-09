import { Component } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import { Dispositivo } from '../model/Dispositivo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listadoDispositivos: Array<Dispositivo> = new Array<Dispositivo>;

  constructor(public dispositivoServ:DispositivoService) {

  }
  ngOnInit()
  {
    this.dispositivoServ.getDispositivos().then(lst=>{
      this.listadoDispositivos=lst;
    })
    .catch(err=>{
      console.error('Error al obtener lista de dispositivos');
    });
  }
}
