import { Component } from '@angular/core';
import { CacheImageService } from 'src/app/shared/services/cache-image.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-about-the-author',
  templateUrl: './about-the-author.component.html',
  styleUrls: ['./about-the-author.component.css']
})
export class AboutTheAuthorComponent {
  responsiveSizes={
    xSmall: false,
    small: false,
    medium: false,
    large: false
  }
  imageSrc: string = '../../../assets/images/author-200px.png'; // Imagen por defecto
  imageUrl: string = '../../../assets/images/author-200px.png'; // URL de la imagen

  constructor(
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

   getClasses() { // get classes for responsive design
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }
}
