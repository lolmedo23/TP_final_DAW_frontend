import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoElectrovalvula'
})
export class EstadoElectrovalvulaPipe implements PipeTransform {

  transform(value: Number): String {
    var valueValvula;
    return (value?"Abierta":"Cerrada");
    }
}
