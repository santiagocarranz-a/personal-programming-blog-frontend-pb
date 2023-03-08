import { Component, OnInit} from '@angular/core';
import { ArticleViewChangeService } from 'src/app/services/article-view-change.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-list-of-articles',
  templateUrl: './list-of-articles.component.html',
  styleUrls: ['./list-of-articles.component.css']
})
export class ListOfArticlesComponent implements OnInit{
  itemNumber!:Array<Object>

  constructor(public cssService: ArticleViewChangeService , public article:ArticleService){}

  ngOnInit(): void {
    this.itemNumber = this.article.itemNumber
  }
}
