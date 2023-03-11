import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { AuthorPageComponent } from './pages/author-page/author-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ArticleFinderComponent } from './components/article-finder/article-finder.component';
import { ListOfArticlesComponent } from './components/list-of-articles/list-of-articles.component';
import { ArticleToIterateComponent } from './components/article-to-iterate/article-to-iterate.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutTheAuthorComponent } from './components/about-the-author/about-the-author.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NetworkIconsComponent } from './components/network-icons/network-icons.component';
import { SearchModalComponent } from './components/search-modal/search-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlePageComponent,
    AuthorPageComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    ArticleFinderComponent,
    ListOfArticlesComponent,
    ArticleToIterateComponent,
    PaginationComponent,
    ArticleComponent,
    AboutTheAuthorComponent,
    WelcomeComponent,
    NetworkIconsComponent,
    SearchModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
