import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective {

   constructor(private el: ElementRef) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    let validate,
        val = this.el.nativeElement.value;
    
    val = val.replace(/[^0-9]/g,"");
     if(val && val != ""){
      this.el.nativeElement.value = Number.parseInt(val).toLocaleString("en-US", { 
                                      style: 'currency', 
                                      currency: 'USD',
                                      minimumFractionDigits:0});
     }else{
      this.el.nativeElement.value = "";
     }
      
  }
}
