import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ["./tittle.component.css"]
})

export class TitleComponent implements OnInit {
  //alcance nombre  dato  contenido
    public name:string = "";
    public isAvailable:boolean = true
    public css_Class_btn: string[] = ['active','shadow']
    public moreInformation : boolean = false;
    public category : string =""
    public topics : string[] =[]

    @Input() userSubscribed! : boolean ;

    constructor(){}


    ngOnInit(){
      this.category = "web"

      this.name ="Isaac";
      this.topics = [
        'Fundamentos del framework',
        'Componentes',
        'Directivas',
        'Animaciones',
        'Servicios',
        'RxJS',
        'Binding']



    }

    toggleMoreInformations() {
      this.moreInformation = !this.moreInformation
    }




}
