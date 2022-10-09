import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../../model/Dispositivo';
import { LogsService } from '../../services/logs.service';
import { Log } from '../../model/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})

export class LogsPage implements OnInit {

  listadoLogs: Array<Log> = new Array<Log>;
  public idDispositivo: Number;
  constructor(private router:ActivatedRoute,
              private dLog:LogsService) {
              this.idDispositivo = Number(this.router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.dLog.getLogs(this.idDispositivo).then(listaLogs=>{
      console.log("ngOnInit dispositivo.page in getDispositivo");
      this.listadoLogs=listaLogs;
    }).catch(err=>{
      console.error('Error al obtener logs del Dispositivo id:'+ this.idDispositivo);
    });
  }

}
