import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): number {
    return price - (price * discountPercentage / 100);
  }
}