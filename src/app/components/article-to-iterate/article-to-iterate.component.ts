import { Component, Input } from '@angular/core';
import { ArticleViewChangeService } from 'src/app/shared/services/article-view-change.service';

@Component({
  selector: 'app-article-to-iterate',
  templateUrl: './article-to-iterate.component.html',
  styleUrls: ['./article-to-iterate.component.css']
})
export class ArticleToIterateComponent {
@Input() articleData:any
@Input() stylesForMoreArticlesData:any
@Input() stylesForMoreArticlesDataText:any


constructor(public cssService: ArticleViewChangeService){}
}
