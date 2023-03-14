import { TestBed } from '@angular/core/testing';

import { ArticleViewChangeService } from './article-view-change.service';

describe('ViewChangeArticleServiceService', () => {
  let service: ArticleViewChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleViewChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
