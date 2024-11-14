import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'K2CTemperatureConverter',
  standalone: true
})
export class K2CTemperatureConverterPipe implements PipeTransform {

  transform(value?: number, ...args: unknown[]): string {
    return value !== undefined && value !== null ? (value - 273).toFixed(2) : '0.00';
  }

}
