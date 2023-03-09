import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  itemNumber = [
    {
      title:'Angular: Manejo de la asyncronia con Observables',
      data:'¿Que relación tienen Async, las Promesas y los Observables?',
      date:'January 16th, 2023  · 1 min read'
    },
    {
      title:'Titulo 2asdasdasd',
      data:'Data2dasdasd',
      date:'January 16th, 2023  · 1 min read'
    },
    {
      title:'Titulo 3',
      data:'Data3',
      date:'January 16th, 2023  · 1 min read'
    },
    {
      title:'Titulo 4',
      data:'Data4',
      date:'January 16th, 2023  · 1 min read'
    },
    {
      title:'Titulo 5',
      data:'Data5',
      date:'January 16th, 2023  · 1 min read'
    },
    {
      title:'Titulo 6',
      data:'Data6',
      date:'January 16th, 2023  · 1 min read'
    },
  ];
  
  constructor() { }
}
