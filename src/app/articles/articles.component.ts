import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/articles.service';
import {showUp} from "../animations/showUp.animation"
import {staggeredShowUp} from "../animations/staggeredShowUp.animation"

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers:[ArticleService],
  animations: [staggeredShowUp]
})
export class ArticlesComponent implements OnInit {
  public activa: boolean = false;

  constructor(public articlesS: ArticleService) { }

  ngOnInit(): void {
    this.articlesS.getAll();


    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.activa = true;
  }, 3000);

  }

}
