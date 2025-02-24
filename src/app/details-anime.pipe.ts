import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detailsAnime',
  standalone: true
})
export class DetailsAnimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
