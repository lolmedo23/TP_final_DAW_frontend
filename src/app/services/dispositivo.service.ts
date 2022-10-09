import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DispositivoService {
  listado:Array<Dispositivo> = new Array<Dispositivo>();

  constructor(private _http:HttpClient) {

  }

  getDispositivos(): Promise<Array<Dispositivo>>{
    return this._http.get<Array<Dispositivo>>("http://localhost:3000/dispositivos").toPromise();
  }

  getDispositivo(id: Number): Promise<Dispositivo>{
    console.log("ngOnInit dispositivo.page service getDispositivo");
    let aux = this._http.get<Dispositivo>("http://localhost:3000/dispositivos/"+id).toPromise();
    console.log("ngOnInit dispositivo.page service getDispositivo 2");
    return aux;
  }

}
