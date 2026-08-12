import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'filterPipe',
  standalone: false,
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLowerCase() : ""
    if (filterText) {
      value = value.filter((p: Product) => p.name.toLowerCase().includes(filterText));
    }
    return value;
  }
}