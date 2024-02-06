import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage',
})
export class NoImagePipe implements PipeTransform {
    noimage = '../assets/images/noimage.jpg';

  transform(image: string): string {
    if (image == undefined) {
      return this.noimage;
    }
    else {
      return image
    }
  }
}
