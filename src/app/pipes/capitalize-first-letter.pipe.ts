import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    const val = new String(value);
    return val.charAt(0).toUpperCase() + val.slice(1);
  }

}
