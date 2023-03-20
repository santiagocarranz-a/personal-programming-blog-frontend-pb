import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'blog-personal-de-programacion';
  constructor(private router: Router) {}

  ngOnInit() {
    // Scroll to the top of the site on every route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
    }});

    // Apply styles for "day mode"
    const theme = localStorage.getItem('theme-color-mode');
    if (theme === 'white-theme') {
      document.body.classList.add('white-theme');
    }
  }
}
