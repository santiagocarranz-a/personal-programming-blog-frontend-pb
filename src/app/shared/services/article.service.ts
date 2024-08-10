import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Article, ArticleInfo, Articles, ArticlesKeyword } from '../interfaces/articleInterface';
import { config } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiLocal:string = config.localHost
  api:string = config.api
  cachedArticleInfo$!: Observable<ArticleInfo[]>;
  
  constructor(private http: HttpClient) { }

  getArticles(): Observable <Articles[]> {
    return this.http.get<Articles[]>(`${this.api}/articles`).pipe(
      map(response =>{
        return response
      })
    )
  }
  
  
  getArticle(url:string): Observable <Article> {
    return this.http.get<Article>(`${this.api}/articles/${url}`).pipe(
      map(response =>{
        return response
      })
    )
  }

  
  getArticleKeyword(keyword: string): Observable<ArticlesKeyword[]> {
    if (this.cachedArticleInfo$) {
      return this.cachedArticleInfo$.pipe(
        map((articles: ArticleInfo[]) => {
          const filteredArticles: ArticlesKeyword[] = [];
          const searchWords = keyword.toLowerCase().split(' ').filter(word => word !== '');
          articles.forEach((article: ArticleInfo) => {
            let found = false;
            searchWords.forEach((word: string) => {
              if (
                article.title.toLowerCase().includes(word) ||
                article.description.toLowerCase().includes(word) ||
                article.tags.toLowerCase().includes(word)
              ) {
                found = true;
                return;
              }
            });
            if (found) {
              filteredArticles.push({
                id: article.id,
                title: article.title,
                description: article.description,
                hero_image: article.hero_image,
                date: article.date,
                url_article: article.url_article,
                tags: article.tags,
                read_time: article.read_time,
              });
            }
          });
          if (filteredArticles.length <= 0) {
            throw new HttpErrorResponse({ status: 404, statusText: "No se encontraron resultados para los términos de búsqueda ingresados." });
          }
          return filteredArticles ;
        })
      );
    } else {
      return this.http
        .get<ArticlesKeyword[]>(`${this.api}/articlesKeyword?keywords=${keyword}`)
        .pipe(map((response) => response));
    }
  }
  

  getArticleInfo(): Observable <ArticleInfo[]> {
    if(!this.cachedArticleInfo$){
      this.cachedArticleInfo$ = this.http.get<ArticleInfo[]>(`${this.api}/articlesInfo`).pipe(
        map((response: ArticleInfo[]) => response),
        shareReplay(1)
      )
    }
    return this.cachedArticleInfo$;
  }
}
