import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLowerCase'
})
export class ToLowerCasePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (!value) {
      return '';
    }
    const val = new String(value);
    return val.toLowerCase();
  }

}
