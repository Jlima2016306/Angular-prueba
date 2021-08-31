import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ["./tittle.component.css"]
})

export class TitleComponent implements OnInit {
  //alcance nombre  dato  contenido
    public name:string = "";
    public isAvailable:boolean = false
    public css_Class_btn: string[] = ['active','shadow']
    public moreInformation : boolean = false;
    public category : string ="";
    public topics : string[] =[];
    public launchDate!: Date;
    public price : number = 25;
    public seconds : number = 4500;

    @Input() userSubscribed! : boolean ;

    constructor(){}


    ngOnInit(){
      this.category = "web"
      this.launchDate = new Date(2021,11,25);
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
