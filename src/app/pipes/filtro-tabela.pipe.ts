import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTabela'
})
export class FiltroTabelaPipe implements PipeTransform {

  transform(objetos: any, value: any): any {
    if(value !== undefined && value !== '') {
      return objetos.filter((objeto: any) => {
        for(let propriedade in objeto) {
          if((objeto[propriedade].toString()).indexOf(value) !== -1) {
            return (objeto[propriedade].toString()).indexOf(value) !== -1; 
          }
        }
      });
    } else {
      return objetos;
    }
  }

}
