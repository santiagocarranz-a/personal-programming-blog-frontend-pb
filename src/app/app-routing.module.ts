import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { AuthorPageComponent } from './pages/author-page/author-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'article:1',
    component:ArticlePageComponent
  },
  {
    path:'author',
    component:AuthorPageComponent
  },
  {
    path:'**',
    component:NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
