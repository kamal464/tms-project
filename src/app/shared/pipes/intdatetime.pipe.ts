import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intdatetime'
})
export class IntdatetimePipe implements PipeTransform {

  transform(value: string): number {
    const date = new Date(value);
    return date.getTime();
  }
}
