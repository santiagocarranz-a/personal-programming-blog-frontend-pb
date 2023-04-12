import { Component } from '@angular/core';
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

  constructor(private ResponsiveService:ResponsiveService){
    this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
      this.responsiveSizes = responsiveSizes;
    });
  }

   getClasses() { // get classes for responsive design
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }
}
