import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoElectrovalvula'
})
export class EstadoElectrovalvulaPipe implements PipeTransform {

  transform(value: number): string {
    var valueValvula;
    return (value?"Abierta":"Cerrada");
    }
}
