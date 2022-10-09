import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../../model/Dispositivo';
import { Medicion } from '../../model/Medicion';
import { DispositivoService } from '../../services/dispositivo.service';
import { MedicionesService } from '../../services/mediciones.service';

import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public dispositivo:Dispositivo;
  public medicion:Medicion;
  constructor(private router:ActivatedRoute,
              private dServ:DispositivoService,
              private mServ:MedicionesService) {

    this.dispositivo =new Dispositivo(0,'','',0);
    this.medicion= new Medicion(0,'',0,0);
  }


  ngOnInit() {
    console.log("ngOnInit dispositivo.page");
    var idDispositivo = Number(this.router.snapshot.paramMap.get('id'));
    console.log("ngOnInit dispositivo.page before getDispositivo");
    this.dServ.getDispositivo(idDispositivo).then(dispExito=>{
      console.log("ngOnInit dispositivo.page in getDispositivo");
      this.dispositivo=dispExito;
      console.log(this.dispositivo);
    }).catch(err=>{
      console.log("ngOnInit dispositivo.page error getDispositivo");
      console.error('Error al obtener datos del Dispositivo id:'+ idDispositivo);
    });
  }

  private valorObtenido:number=0;
  public myChart;
  private chartOptions;

  ionViewWillEnter(){

  }

  ionViewDidEnter() {
    this.generarChart();
    var idDispositivo = Number(this.router.snapshot.paramMap.get('id'));
    this.mServ.getMedicion(idDispositivo).then(med=>{
      this.medicion=med;
    }).catch(err=>{
      console.error('Error al obtener datos de la Medicion id:'+ idDispositivo);
    });
    this.actualizarChart(this.medicion.valor)

  }


  actualizarChart(valor: Number){
    //llamo al update del chart para refrescar y mostrar el nuevo valor
    this.myChart.update({series: [{
      name: 'kPA',
      data: [valor],
      tooltip: {
          valueSuffix: ' kPA'
      }
  }]});
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: this.dispositivo.nombre
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
    },
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
}
