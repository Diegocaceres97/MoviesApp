import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

  const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size="500") {

    if(!img){
      return;
    }

    const imgURL = `${URL}${size}/${img}`;
    return imgURL;
  }

}
