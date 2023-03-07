import { Component } from '@angular/core';
import { ArticleViewChangeService } from 'src/app/services/article-view-change.service';

@Component({
  selector: 'app-list-of-articles',
  templateUrl: './list-of-articles.component.html',
  styleUrls: ['./list-of-articles.component.css']
})
export class ListOfArticlesComponent {
  itemNumber = [
    {
      title:'titulo1',
      data:'data1',
      date:'January 16th, 2023  · 1 min read'
    },
    {
      title:'titulo2',
      data:'data2',
      date:'January 16th, 2023  · 1 min read'
    },
    {
      title:'titulo3',
      data:'data3',
      date:'January 16th, 2023  · 1 min read'
    },
    {
      title:'titulo4',
      data:'data4',
      date:'January 16th, 2023  · 1 min read'
    },
    {
      title:'titulo5',
      data:'data5',
      date:'January 16th, 2023  · 1 min read'
    },
    {
      title:'titulo6',
      data:'data6',
      date:'January 16th, 2023  · 1 min read'
    },
  ];
  constructor(public cssService: ArticleViewChangeService){}
}
