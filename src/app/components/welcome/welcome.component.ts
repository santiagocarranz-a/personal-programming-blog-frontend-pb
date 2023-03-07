import { Component } from '@angular/core';
import { ArticleViewChangeService } from 'src/app/services/article-view-change.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  btnTile: boolean = false;
  btnRow: boolean = true;

  constructor(public cssService:ArticleViewChangeService){}

  // Modify the view format of the articles
  updateTile(){
    this.cssService.updateTileCssProperties();
  }
  updateRow(){
    this.cssService.updateRowCssProperties();
  }
}
