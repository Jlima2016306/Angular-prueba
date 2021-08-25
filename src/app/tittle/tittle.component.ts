import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ["./tittle.component.css"]
})

export class TitleComponent implements OnInit {
  //alcance nombre  dato  contenido
    public name : string ;
    public edad : number ;

    constructor(){
      this.name = "";
      this.edad =13;

    }


    ngOnInit(){

      this.name ="Isaac";
      this.edad = 20;

    }




    getEdadNombre(){
      return `${this.name} : ${this.edad}`;

    }


}
