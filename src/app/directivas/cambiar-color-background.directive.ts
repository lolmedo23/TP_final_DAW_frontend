import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCambiarColorBackground]'
})
export class CambiarColorBackgroundDirective {

  constructor(private el:ElementRef) { }

  private cambiar(color:string){
    this.el.nativeElement.style.backgroundColor=color
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.cambiar('silver')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.cambiar('')
  }
}
