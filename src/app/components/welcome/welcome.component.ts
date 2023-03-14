import { Component} from '@angular/core';
import { ArticleViewChangeService } from 'src/app/shared/services/article-view-change.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  btnTile: boolean = false;
  btnRow: boolean = true;
  responsiveSizes={
    xSmall: false,
    small: false,
    medium: false,
    large: false
  }

  constructor(public CssService:ArticleViewChangeService, private ResponsiveService:ResponsiveService){
    this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
      this.responsiveSizes = responsiveSizes;
    });
  }

  // asdasdasdasdasdasdasdasdasdasdasdasdasdasd
  getClasses() {
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }

  // Modify the view format of the articles
  updateTile(){
    this.CssService.updateTileCssProperties();
  }
  updateRow(){
    this.CssService.updateRowCssProperties();
  }
}
