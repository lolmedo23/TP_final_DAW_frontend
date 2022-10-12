import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicion } from '../model/Medicion';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {

  constructor(private _http:HttpClient) {

  }

  getMediciones(id: Number): Promise<Array<Medicion>>{
    return this._http.get<Array<Medicion>>("http://localhost:3000/medicion/"+ id +"/todas").toPromise();
  }

  getMedicion(id: Number): Promise<Medicion>{
    return this._http.get<Medicion>("http://localhost:3000/medicion/"+ id).toPromise();
  }

  agregarMedicion(medicion: Medicion){
    return this._http.post("http://localhost:3000/medicion/agregarMedicion",
            {"fecha":medicion.fecha,"valor":medicion.valor,"dispositivoId":medicion.dispositivoId}).toPromise().then((result)=>{console.log(result)});
  }
}
