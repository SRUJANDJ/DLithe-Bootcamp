import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  /* transform(valueOne: number, valueTwo: number): number {
    return valueOne+valueTwo;
  } */
  transform(valueOne: string, valueTwo: string): string {
    return valueOne.concat(" ",valueTwo);
  }

}
