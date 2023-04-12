import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],

})
export class ArticlePageComponent implements OnInit{
  dataArticle!:Array<Object>
  stylesForMoreArticlesData = 'data';
  stylesForMoreArticlesDataText = 'dataText';
  responsiveSizes={
    xSmall: false,
    small: false,
    medium: false,
    large: false
  }

  constructor(
    public Article:ArticleService,
    private ResponsiveService:ResponsiveService,
    private route: ActivatedRoute){
      this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
        this.responsiveSizes = responsiveSizes;
      });
  }
  
  getClasses() { // get classes for responsive design
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }

  getMoreArticlesForView(){
    this.route.paramMap.subscribe(params => {
      let articleUrl: string = '/' + params.get('url_article')
      this.Article.getArticleInfo().subscribe(data => {
        let articleFilter = data.filter((item:any)=>item.url_article !== articleUrl).slice(0,2)
        this.dataArticle = articleFilter
      });
    });
  }

  enableBodyScrolling(){
      document.body.style.overflowY = 'scroll';
      document.body.style.paddingRight = '0px';
  }

  ngOnInit(): void {
    this.getMoreArticlesForView()
    this.enableBodyScrolling()
  }
}
