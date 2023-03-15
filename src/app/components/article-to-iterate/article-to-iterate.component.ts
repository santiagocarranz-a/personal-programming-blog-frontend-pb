import { Component, Input } from '@angular/core';
import { ArticleViewChangeService } from 'src/app/shared/services/article-view-change.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-article-to-iterate',
  templateUrl: './article-to-iterate.component.html',
  styleUrls: ['./article-to-iterate.component.css']
})
export class ArticleToIterateComponent {
  @Input() articleData:any
  @Input() stylesForMoreArticlesData:any
  @Input() stylesForMoreArticlesDataText:any

  responsiveSizes={
    xSmall: false,
    small: false,
    medium: false,
    large: false
  }

  constructor(public cssService: ArticleViewChangeService, private ResponsiveService:ResponsiveService){
    this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
      this.responsiveSizes = responsiveSizes;
    });
  }

  // get classes for responsive design
  getClasses() {
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }
}
