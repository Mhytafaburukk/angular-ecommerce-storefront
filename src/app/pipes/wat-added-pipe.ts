import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watAdded',
  standalone: false,
})
export class WatAddedPipe implements PipeTransform {
  transform(value: number): number {
    return value + (value * 18 / 100);
  }
}
