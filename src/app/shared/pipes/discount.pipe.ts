import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value > 1000) {
      return value * 0.8;
    } else {
      return value;
    }
  }

}
