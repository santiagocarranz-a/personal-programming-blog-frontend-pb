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
    // Desplaza hacia la parte superior del sitio en cada cambio de ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
    }});
  }
}
