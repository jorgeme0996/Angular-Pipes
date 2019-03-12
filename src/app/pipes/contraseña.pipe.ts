import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    let salida:string ="";
    if(activar){
      for(let i of value) {
        salida += '*';
      }
      return salida;
    } else {
      return value;
    }

  }

}
