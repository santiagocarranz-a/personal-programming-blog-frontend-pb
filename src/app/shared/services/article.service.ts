import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  itemNumber = []

  getArticles(): Observable <any> {
    //return this.http.get('https://server-personal-programming-blog-production.up.railway.app/articles').pipe(
      return this.http.get('http://localhost:3000/articles').pipe(
      map(response =>{
        return response
      })
    )
  }
  
  getArticle(url:string): Observable <any> {
    //return this.http.get(`https://server-personal-programming-blog-production.up.railway.app/articles/${url}`).pipe(
      return this.http.get(`http://localhost:3000/articles/${url}`).pipe(
      map(response =>{
        return response
      })
    )
  }

  getArticleInfo(): Observable <any> {
    //return this.http.get(`https://server-personal-programming-blog-production.up.railway.app/articles`).pipe(
      return this.http.get(`http://localhost:3000/articlesInfo`).pipe(
      map(response =>{
        return response
      })
    )
  }
  
  
}
