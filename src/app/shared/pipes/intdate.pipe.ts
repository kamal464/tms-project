import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'intdate'
})
export class IntdatePipe implements PipeTransform {


  transform(value: string,): number {
    return Date.parse(value);
  }
  
  }


