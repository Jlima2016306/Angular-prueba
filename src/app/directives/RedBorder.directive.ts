import { Directive, ElementRef, Input, HostListener} from '@angular/core'


@Directive({
  selector: "[redBorder]"
})

export class RedBorder {

@Input() redBorder!: string;
@Input() redClass!: string;


constructor( private el : ElementRef){}

ngOnInit() {
  console.log("Estas usando mi directiva")
  this.el.nativeElement.classList.add(this.redClass)
}




@HostListener('click') applyBorder(){
  this.el.nativeElement.style.border = `solid 2px ${this.redBorder}`

}


@HostListener('mouseout') removeBorder(){
  this.el.nativeElement.style.border = `none`

}

}
