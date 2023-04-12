import { Component, OnInit} from '@angular/core';
import { ArticleViewChangeService } from 'src/app/shared/services/article-view-change.service';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-list-of-articles',
  templateUrl: './list-of-articles.component.html',
  styleUrls: ['./list-of-articles.component.css']
})
export class ListOfArticlesComponent implements OnInit{
  dataArticle!:Array<Object>
  showSpinner:boolean = true

  constructor(
    public cssService: ArticleViewChangeService,
    public Article:ArticleService){}

  getArticles(){
    this.Article.getArticleInfo().subscribe(data=>{
      this.dataArticle = data
      if(typeof this.dataArticle == "object"){
        this.showSpinner= false
      }
    })
  }

  ngOnInit(): void {
    this.getArticles()
  }
}
