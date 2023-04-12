import { Component } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent {
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
