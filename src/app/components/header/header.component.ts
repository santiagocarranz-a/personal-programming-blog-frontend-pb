import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  iconModeTheme!:boolean
  hamburgerValue=true
  backDropMenuHamburguer = false;
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

  ngOnInit(): void {
    // Assign the corresponding icon to iconModeTheme, along with another line in this.toggleThemeMode().
    this.iconModeTheme = document.body.classList.contains('white-theme');
  }
  

  // Toggle them mode color
  toggleThemeMode(): void {
    const body = document.body;
    body.classList.toggle('white-theme');
    const isWhiteTheme = body.classList.contains('white-theme');
    localStorage.setItem('theme-color-mode', isWhiteTheme ? 'white-theme' : '');
    isWhiteTheme?this.iconModeTheme=true:this.iconModeTheme=false
  }

  // Toggle show menu hamburger
  toggleShowMenuHamburger(event: any) {
    if (event.target.classList.contains('backdrop') || 
        event.target.classList.contains('close') ||
        event.target.classList.contains('close-hamburguer-container')) {
      this.hamburgerValue = true
      console.log(event)
    }
  }

  // get classes for responsive design
  getClasses() {
    return this.ResponsiveService.getClasses(this.responsiveSizes);
  }

  activatedHamburger(){
    this.hamburgerValue = !this.hamburgerValue
  }

}
