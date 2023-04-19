import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, catchError, debounceTime, filter, finalize, fromEvent, map, of, switchMap, tap, throwError} from 'rxjs';
import { ArticlesKeyword } from 'src/app/shared/interfaces/articleInterface';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-finder-articles-modal',
  templateUrl: './finder-articles-modal.component.html',
  styleUrls: ['./finder-articles-modal.component.css']
})
export class FinderArticlesModalComponent{
  @ViewChild('articleSearchInput',{static:false}) articleSearchInput! : ElementRef;
  showModal:boolean = false;
  showErrorMessage:boolean = false
  scrollModal: boolean = false
  showSpinner:boolean = false
  dataArticle:ArticlesKeyword[] = [];
  article$!: Observable<ArticlesKeyword[]>
  stopNgDoCheckErrorMessageOff:number = 0
  stopNgDoCheckGetArticle:number = 0
  stopNgDoCheckScroll:number = 0
  responsiveSizes={
    xSmall: false,
    small: false,
    medium: false,
    large: false
  }

  constructor(
    private ResponsiveService:ResponsiveService,
    public Article:ArticleService){
      this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
        this.responsiveSizes = responsiveSizes;
      });
    }

  getClasses() { // get classes for responsive design
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }

  ngDoCheck() {
    // get articles 
    if(this.showModal !== false && this.articleSearchInput !== undefined && this.stopNgDoCheckGetArticle < 1){
        this.stopNgDoCheckGetArticle = 2
        this.article$ = fromEvent<Event>(this.articleSearchInput.nativeElement, 'keyup').pipe(
          map((event:Event) => {
            const searchTerm = (event.target as HTMLInputElement).value;
            return searchTerm
          }),
          filter((searchTerm:string) => searchTerm.length > 2),
          debounceTime(500),
          tap(() => this.showSpinner = true),
          switchMap((searchTerm:string) => {
            return this.Article.getArticleKeyword(searchTerm).pipe(
              catchError((error) => {
                if (error.status === 404) {
                  this.showErrorMessage = true;
                  console.log('Error 404: No se encontraron resultados para los términos de búsqueda ingresados.');
                  return of([]);
                }
                return throwError(() => error);
              }),
              finalize(() => {
                this.showSpinner = false;
              })
            )
          }),
        );
    }
    
    // remove articles when input is empty
    if (this.articleSearchInput){
      if (!this.articleSearchInput.nativeElement.value && document!.querySelector('.article')) {
        this.stopNgDoCheckScroll = 0
        this.scrollModal = false
        this.showSpinner = false
        document!.querySelector('.article')?.remove()
      }
    }

    // scroll modal - on
    if(document!.querySelector('.article') && this.stopNgDoCheckScroll < 1){
      this.stopNgDoCheckScroll = 2
      this.scrollModal = true
    }
     
    // error message on dom - Off
    if(document!.querySelector('.search-form input') && this.showErrorMessage === true && this.stopNgDoCheckErrorMessageOff < 1){
      this.stopNgDoCheckErrorMessageOff = 2
      document!.querySelector('.search-form input')?.addEventListener("keydown",(e:any)=>{
        if(e.key === 'Backspace') {
          this.showErrorMessage = false;
        }
      })
    }
  }

  openModal() {
    this.stopNgDoCheckErrorMessageOff = 0
    this.stopNgDoCheckGetArticle = 0
    this.stopNgDoCheckScroll = 0
    this.showModal = !this.showModal;
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = '14px';
  }

  closeModal(event: any) {
    if (event.target.classList.contains('backdrop')){
      this.showModal = false;
      this.scrollModal = false
      this.showErrorMessage = false;
      document.body.style.overflowY = 'scroll';
      document.body.style.paddingRight = '0px';
    }
  }
}
