import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-finder-articles-modal',
  templateUrl: './finder-articles-modal.component.html',
  styleUrls: ['./finder-articles-modal.component.css']
})
export class FinderArticlesModalComponent implements OnInit{
  showModal = false;
  itemNumber!:Array<Object>
  responsiveSizes={
    xSmall: false,
    small: false,
    medium: false,
    large: false
  }

  constructor(public article:ArticleService, private ResponsiveService:ResponsiveService){
    this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
      this.responsiveSizes = responsiveSizes;
    });
  }

  // get classes for responsive design
  getClasses() {
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }

  openModal() {
    this.showModal = !this.showModal;
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = '14px';
  }
  
  closeModal(event: any) {
    if (event.target.classList.contains('backdrop')) {
      this.showModal = false;
      document.body.style.overflowY = 'scroll';
      document.body.style.paddingRight = '0px';
    }
  }

  ngOnInit(): void {
    this.itemNumber = this.article.itemNumber
  }

}
