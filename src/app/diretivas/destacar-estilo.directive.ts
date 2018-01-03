import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[destacarEstilo]'
})
export class DestacarEstiloDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.transformar('bold', 'uppercase');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.transformar();
  }

  constructor(private elementref: ElementRef) {}

   private transformar(fontWeight: string = null, textTransform: string = null){
    this.elementref.nativeElement.style.fontWeight = fontWeight;
    this.elementref.nativeElement.style.textTransform = textTransform;
   }

}
