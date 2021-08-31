import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import {ArticleService} from '../services/articles.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public name!: any;
  public username!: any;
  public avatar!: any;



  @Output() subscribed = new EventEmitter<boolean>();
  constructor(public articlesS: ArticleService) { }

  ngOnInit(): void {
    this.name = "isaac"
    this.username ="isaac_2"
    this.avatar ='../assets/11.jpg'
    this.articlesS.articlesCount = 20

    setTimeout(() => this.subscribed.emit(true),3000)  }

  changing(event : any){
    this.name = event.target.value

  }

  changing1(event : any){
    this.username = event.target.value

  }


}
