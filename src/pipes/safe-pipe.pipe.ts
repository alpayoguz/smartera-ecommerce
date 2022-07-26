import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {
  constructor(private _sanitizer:DomSanitizer){}

  transform(url:string):SafeUrl  {
    return this._sanitizer.bypassSecurityTrustUrl(url)
  }

}
