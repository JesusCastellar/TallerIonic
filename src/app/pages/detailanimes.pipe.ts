import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detailanimes',
  standalone: false
})
export class DetailanimesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
