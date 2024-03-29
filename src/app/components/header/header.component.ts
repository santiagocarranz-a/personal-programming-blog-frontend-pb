import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit{
  iconModeTheme!:boolean
  toggleIconAuthor:boolean = true
  currentUrl!:string 
  hamburgerValue=true
  responsiveSizes={
    xSmall: false,
    small: false,
    medium: false,
    large: false
  }

  constructor(
    private ResponsiveService:ResponsiveService,
    public router:Router){
    this.ResponsiveService.responsiveSizesSubject.subscribe(responsiveSizes => {
      this.responsiveSizes = responsiveSizes;
    });
  }

  ngDoCheck() {
    // remove "About me" link in "About me" section
    if(this.router.url === "/author"){
      this.currentUrl = this.router.url
      this.toggleIconAuthor = false
    }else{
      this.toggleIconAuthor = true
    }
  }

  ngOnInit(): void {
    // Assign the corresponding icon to iconModeTheme, along with another line in this.toggleThemeMode().
    this.iconModeTheme = document.body.classList.contains('white-theme');
  }
  
  toggleThemeMode(): void {
    const body = document.body;
    body.classList.toggle('white-theme');
    const isWhiteTheme = body.classList.contains('white-theme');
    localStorage.setItem('theme-color-mode', isWhiteTheme ? 'white-theme' : '');
    isWhiteTheme?this.iconModeTheme=true:this.iconModeTheme=false
  }

  toggleShowMenuHamburger(event: any) {
    if (event.target.classList.contains('backdrop') || 
        event.target.classList.contains('close') ||
        event.target.classList.contains('close-hamburguer-container')) {
      this.hamburgerValue = true
    }
  }

  // get classes for responsive design
  getClasses() {
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }

  openHamburger(){
    this.hamburgerValue = !this.hamburgerValue
  }
}
