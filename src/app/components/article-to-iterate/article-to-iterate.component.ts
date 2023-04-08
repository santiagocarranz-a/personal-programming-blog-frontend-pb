import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleViewChangeService } from 'src/app/shared/services/article-view-change.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-article-to-iterate',
  templateUrl: './article-to-iterate.component.html',
  styleUrls: ['./article-to-iterate.component.css']
})
export class ArticleToIterateComponent {
  @Input() dataArticle:any
  @Input() stylesForMoreArticlesData:any
  @Input() stylesForMoreArticlesDataText:any

  responsiveSizes={
    xSmall: false,
    small: false,
    medium: false,
    large: false
  }

  constructor(
    public cssService: ArticleViewChangeService,
    private ResponsiveService:ResponsiveService,
    private router:Router,
    private route: ActivatedRoute){

    this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
      this.responsiveSizes = responsiveSizes;
    });
  }

  // get classes for responsive design
  getClasses() {
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }

  navigateToArticle(url_article:any){
    this.router.navigate(['article' + url_article])
  }
}
