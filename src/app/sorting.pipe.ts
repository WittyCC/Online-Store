import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(input: Album[], filterByArtist) : any {
    var output: Album[] = [];
    if(filterByArtist === "0"){
      return input;
    } else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist.substring(0,1) === filterByArtist) {
          output.push(input[i]);
        }
      }
      return output;
    } //end of else

  } //end of transform

} // end of class
