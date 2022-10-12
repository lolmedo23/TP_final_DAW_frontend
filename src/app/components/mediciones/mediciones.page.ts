import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../../model/Medicion';
import { MedicionesService } from '../../services/mediciones.service';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  listadoMediciones: Array<Medicion> = new Array<Medicion>;
  public idDispositivo: Number;
  constructor(private router:ActivatedRoute,
              private dMed:MedicionesService) {
              this.idDispositivo = Number(this.router.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.dMed.getMediciones(this.idDispositivo).then(listaMediciones=>{
      this.listadoMediciones=listaMediciones;
    }).catch(err=>{
      console.error('Error al obtener mediciones del Dispositivo id:'+ this.idDispositivo);
    });
  }

}
