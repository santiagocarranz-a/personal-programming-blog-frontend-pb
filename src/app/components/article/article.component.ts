import { Component, OnInit} from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  itemNumber!:Array<Object>
  responsiveSizes={
    xSmall: false,
    small: false,
    medium: false,
    large: false
  }

  constructor(public Article:ArticleService, private ResponsiveService:ResponsiveService){
    this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
      this.responsiveSizes = responsiveSizes;
    });
  }

  // get classes for responsive design
  getClasses() {
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }
  
  ngOnInit(): void {
    this.itemNumber = this.Article.itemNumber
  }
}
