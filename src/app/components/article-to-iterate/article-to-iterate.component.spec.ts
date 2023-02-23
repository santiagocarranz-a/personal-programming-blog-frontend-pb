import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleToIterateComponent } from './article-to-iterate.component';

describe('ArticleToIterateComponent', () => {
  let component: ArticleToIterateComponent;
  let fixture: ComponentFixture<ArticleToIterateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleToIterateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleToIterateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
