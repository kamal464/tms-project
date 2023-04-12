import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment-timezone';

@Pipe({
  name: 'stringdatetime'
})
export class StringdatetimePipe implements PipeTransform {

  transform(value: number,src_format: string, tar_format: string = 'DD MM YYYY hh:mm:ss'): string {
    const date = new Date(value);
    return moment('' + date, src_format).format(tar_format);
  }

  // transform(value: number, src_format: string, tar_format: string = 'DD MMM YYYY'): string {
  //   return moment('' + value, src_format).format(tar_format);
  // }
}