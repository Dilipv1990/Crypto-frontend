import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autocomplete'
})
export class AutocompletePipe implements PipeTransform {

  transform(elemList: string[], criteria: string) {
    return elemList.filter(elem =>criteria && elem.toLowerCase().indexOf(criteria.toLowerCase()) >= 0 ).slice(0,10)
  }
}
