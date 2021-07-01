import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareroot'
})
export class SquarerootPipe implements PipeTransform {

  transform(num: number): number {
    return Math.sqrt(num);
  }
}