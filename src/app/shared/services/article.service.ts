import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article, ArticleInfo, Articles, ArticlesKeyword } from '../interfaces/articleInterface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  constructor(private http: HttpClient) { }

  getArticles(): Observable <Articles[]> {
    //return this.http.get<Articles[]>('https://server-personal-programming-blog-production.up.railway.app/articles').pipe(
    return this.http.get<Articles[]>('http://localhost:3000/articles').pipe(
      map(response =>{
        return response
      })
    )
  }
  
  getArticle(url:string): Observable <Article> {
    return this.http.get<Article>(`https://server-personal-programming-blog-production.up.railway.app/articles/${url}`).pipe(
    //return this.http.get<Article>(`http://localhost:3000/articles/${url}`).pipe(
      map(response =>{
        return response
      })
    )
  }

  getArticleKeyword(keyword:string): Observable <ArticlesKeyword[]> {
    return this.http.get<ArticlesKeyword[]>(`https://server-personal-programming-blog-production.up.railway.app/articlesKeyword?keywords=${keyword}`).pipe(
    //return this.http.get<ArticlesKeyword[]>(`http://localhost:3000/articlesKeyword?keywords=${keyword}`).pipe(
      map(response =>{
        return response
      })
    )
  }

  getArticleInfo(): Observable <ArticleInfo[]> {
    return this.http.get<ArticleInfo[]>(`https://server-personal-programming-blog-production.up.railway.app/articles`).pipe(
    //return this.http.get<ArticleInfo[]>(`http://localhost:3000/articlesInfo`).pipe(
      map(response =>{
        return response
      })
    )
  }
  
  
}
