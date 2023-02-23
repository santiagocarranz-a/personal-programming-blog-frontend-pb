import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFinderComponent } from './article-finder.component';

describe('ArticleFinderComponent', () => {
  let component: ArticleFinderComponent;
  let fixture: ComponentFixture<ArticleFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
