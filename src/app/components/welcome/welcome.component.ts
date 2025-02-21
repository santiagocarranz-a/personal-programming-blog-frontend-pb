import { Component} from '@angular/core';
import { ArticleViewChangeService } from 'src/app/shared/services/article-view-change.service';
import { CacheImageService } from 'src/app/shared/services/cache-image.service';
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

  imageSrc: string = '../../../assets/images/author-200px.png'; // Imagen por defecto
  imageUrl: string = '../../../assets/images/author-200px.png'; // URL de la imagen

  constructor(
    public CssService:ArticleViewChangeService, 
    private ResponsiveService:ResponsiveService,
    private cacheImageService: CacheImageService){
    this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
      this.responsiveSizes = responsiveSizes;
    });
  }

  async ngOnInit() {
    const cachedImage = await this.cacheImageService.getCachedImage(this.imageUrl);
    this.imageSrc = cachedImage ? cachedImage : this.imageUrl;
  }

  // get classes for responsive design
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
