import { Injectable } from '@angular/core';
import { Log } from '../model/Log';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private _http:HttpClient) {

  }

  getLogs(id: Number): Promise<Array<Log>>{
    return this._http.get<Array<Log>>("http://localhost:3000/logRiegos/"+ id).toPromise();
  }
}
