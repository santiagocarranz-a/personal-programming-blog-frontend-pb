import { AfterViewInit, Component, ElementRef, Renderer2, ViewEncapsulation} from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements AfterViewInit{
  articleHtml!:SafeHtml;
  aElement: ElementRef | null = null;
  urlArticle: any = this.route.snapshot.paramMap.get('url_article');
  constructor(
    public  Article:ArticleService,
    private sanitizer:DomSanitizer,
    private renderer: Renderer2,
    private el: ElementRef,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef){
  }

  ngAfterViewInit() {}

  getArticleHtml(){
    this.route.paramMap.subscribe(params => {
      let paramMapUrl = params.get('url_article')
      this.Article.getArticle(paramMapUrl!).subscribe(data => {
        this.articleHtml = this.sanitizer.bypassSecurityTrustHtml(data.article);
      });
    });
  }

  ngOnInit() {
    this.getArticleHtml()
  }
}
