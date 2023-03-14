import { Component, OnInit } from '@angular/core';
import { ArticleViewChangeService } from 'src/app/shared/services/article-view-change.service';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit{
  itemNumber!:Array<Object>
  stylesForMoreArticlesData = 'data';
  stylesForMoreArticlesDataText = 'dataText';


  constructor(public cssService: ArticleViewChangeService , public article:ArticleService){}

  ngOnInit(): void {
    this.itemNumber = this.article.itemNumber
  }

}
