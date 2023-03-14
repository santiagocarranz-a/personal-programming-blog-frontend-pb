import { Component, OnInit} from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  itemNumber!:Array<Object>

  constructor(public article:ArticleService){}

  ngOnInit(): void {
    this.itemNumber = this.article.itemNumber
  }
}
