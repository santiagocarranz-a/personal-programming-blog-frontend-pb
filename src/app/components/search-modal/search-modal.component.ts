import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit{
  showModal = false;
  itemNumber!:Array<Object>

  constructor(public article:ArticleService){}

  toggleModal() {
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
