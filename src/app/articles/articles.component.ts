import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(public articlesS: ArticleService) { }

  ngOnInit(): void {
    this.articlesS.getAll();

  }

}
