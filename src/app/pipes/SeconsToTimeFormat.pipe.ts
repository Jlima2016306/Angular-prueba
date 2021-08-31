import {Pipe, PipeTransform} from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name:'secondsToTimeFormats'
})

export class SeconsToTimeFormat implements PipeTransform {
  transform(seconds: number): string {
    // 3600 1hr
    const hours = Math.floor(seconds/ 3600);
    const minutes = Math.floor(seconds % 3600/60)

    return `${hours}hrs ${minutes}mins`;

  }
}
