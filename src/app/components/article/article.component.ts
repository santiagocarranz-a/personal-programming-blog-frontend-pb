import { Component, ViewEncapsulation} from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
  _articleHtml: SafeHtml | undefined
  stopNgDoCheck:number = 0
  showSpinner:boolean = true
  urlArticle: any = this.route.snapshot.paramMap.get('url_article');

  constructor(
    public  Article:ArticleService,
    private sanitizer:DomSanitizer,
    private route: ActivatedRoute,
    private router: Router){}

  getArticleHtml(){
    this.route.paramMap.subscribe(params => {
      this.showSpinner = true
      let paramMapUrl = params.get('url_article')

      this.Article.getArticle(paramMapUrl!).subscribe(data => {
        this._articleHtml = this.sanitizer.bypassSecurityTrustHtml(data.article);
        if(typeof this._articleHtml == "object"){
          this.showSpinner = false
        }
        this.stopNgDoCheck = 0
      });
    });
  }

  ngOnInit() {
    this.getArticleHtml()
  }

  ngDoCheck() {
    if (this._articleHtml !== undefined && typeof this._articleHtml === "object" && this.stopNgDoCheck < 2) {
      for (var i = 0; i < 2; i++) {
        this.stopNgDoCheck += i
      }

      const imgElement = document!.querySelector('.author-and-date a[routerlink="/author"] img');
      const pElement = document!.querySelector('.author-and-date a[routerlink="/author"] p');
      
      if (imgElement && pElement){
        imgElement.addEventListener('click', () => this.router.navigate(['/author']));
        pElement.addEventListener('click', () => this.router.navigate(['/author']));
        (imgElement as HTMLElement).style.cursor = 'pointer';
        (pElement as HTMLElement).style.cursor = 'pointer';
      }
    }
  }
}
