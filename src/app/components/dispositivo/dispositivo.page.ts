import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../../model/Dispositivo';
import { Medicion } from '../../model/Medicion';
import { Log } from '../../model/Log';
import { DispositivoService } from '../../services/dispositivo.service';
import { MedicionesService } from '../../services/mediciones.service';
import { LogsService } from '../../services/logs.service';
import * as moment from 'moment-timezone';
declare var require: any
import * as Highcharts from 'highcharts';
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);


@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public dispositivo:Dispositivo = new Dispositivo(0,'','',0);
  public valvulaCerrada:boolean;
  public myChart;
  private chartOptions;
  public medicion:Medicion = new Medicion(0,'',0,0);
  public idDispositivo;

  constructor(private router:ActivatedRoute,
              private dServ:DispositivoService,
              private mServ:MedicionesService,
              private lServ:LogsService) {

    //por defecto la valvula se considera cerrada
    this.valvulaCerrada = true;
    this.idDispositivo = Number(this.router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.generarChart();
  }

  ionViewWillEnter(){
  }

  ionViewDidEnter() {
    this.getDispositivo(this.idDispositivo);
    this.getMedicion(this.idDispositivo);
  }

  async getDispositivo(idDispositivo:Number){
    try{
      this.dispositivo = await this.dServ.getDispositivo(idDispositivo);
      this.myChart.setTitle({text: this.dispositivo.nombre});
      this.myChart.redraw();
    }catch(error){
      console.log(error);
    }
  }

  async getMedicion(idDispositivo:Number){
    try{
      this.medicion = await this.mServ.getMedicion(idDispositivo);
      this.actualizarChart();
    }catch(error){
      console.log(error);
    }
  }

  actualizarChart(){
    //llamo al update del chart para refrescar y mostrar el nuevo valor
    this.myChart.update({series: [{
      name: 'kPA',
      data: [Number(this.medicion.valor)],
      tooltip: {
          valueSuffix: ' kPA'
      }
    }]});
  }

  //Al cerrar electrovalvula, almacenar log e insertar medicion. Al abrir solo generar log
  async actualizarElectroValvula(){
    //Cambiar estado Electrovalvula
    this.valvulaCerrada = !this.valvulaCerrada;
    this.lServ.agregarLog(new Log(0, Number(this.valvulaCerrada), moment().format('YYYY-MM-DD hh:mm:ss'), this.dispositivo.electrovalvulaId))
    if(this.valvulaCerrada){
      //generar ramdom medicion anterior
      var randomMedicion = this.randomInteger(0,90)
      var auxMedicion: Medicion = new Medicion(0, moment().format('YYYY-MM-DD hh:mm:ss'), randomMedicion, this.dispositivo.dispositivoId);
      await this.mServ.agregarMedicion(auxMedicion);
    }
    await this.getMedicion(this.dispositivo.dispositivoId)
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false,
        }
        ,accessibility: {enabled:false}
        ,title: {
          enabled: true,
          text:''
        }

        ,credits:{enabled:false}
        ,pane: {
            startAngle: -150,
            endAngle: 150
        }
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
    series: [{
        name: 'kPA',
        data: [Number(this.medicion.valor)],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
    //this.myChart.redraw();
  }
}
