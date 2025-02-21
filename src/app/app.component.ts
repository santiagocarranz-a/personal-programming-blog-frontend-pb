import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CacheImageService } from './shared/services/cache-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  themeColorMode = localStorage.getItem('theme-color-mode');
  srcSpinner:string = ""
  title = 'Santiago Carranza - Blog de programación.';
  constructor(
    private router: Router,
    private cacheImageService: CacheImageService) {}

  ngOnInit() {
    // control spinner on site load
    this.srcSpinner = this.themeColorMode === "white-theme" ? "../assets/images/spinnerStartWhite.gif" : "../assets/images/spinnerStartBlack.gif";
    window.onload = () => document.querySelector(".spinnerStart")?.remove();

    // scroll to the top of the site on every route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
    }});

    // apply styles for "day mode"
    if (this.themeColorMode === 'white-theme') {
      document.body.classList.add('white-theme');
    }

    this.cacheImageService.cacheImage('../../../assets/images/author-200px.png');
  }
}
