import { Component, OnInit } from '@angular/core';
import { ArticleViewChangeService } from 'src/app/shared/services/article-view-change.service';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit{
  itemNumber!:Array<Object>
  stylesForMoreArticlesData = 'data';
  stylesForMoreArticlesDataText = 'dataText';
  responsiveSizes={
    xSmall: false,
    small: false,
    medium: false,
    large: false
  }

  constructor(public article:ArticleService, private ResponsiveService:ResponsiveService){
    this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
      this.responsiveSizes = responsiveSizes;
    });
  }
  
  // get classes for responsive design
  getClasses() {
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }

  ngOnInit(): void {
    this.itemNumber = this.article.itemNumber
  }

}
