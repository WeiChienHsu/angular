import { Input,Output, Directive,EventEmitter , HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format' ) format;
  @HostListener('blur') onFocus(){
    let value = this.el.nativeElement.value;
    if(this.format == 'lowerCase' )
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }
  
  @Output('change') change = new EventEmitter();

  onClick(){
    this.format = ! this.format;
    this.change.emit({ newValue: this.format });
  }


  constructor(private el: ElementRef) { }

}

export interface ChangedEvenArgs {
  newValue: boolean;
}