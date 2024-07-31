import { Pipe, PipeTransform } from '@angular/core';

//fernando |toggleCase ="FERNANDO"
@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, args?: boolean): string {
    if(args)return value.toUpperCase();
    return value.toLowerCase();
  }

}
