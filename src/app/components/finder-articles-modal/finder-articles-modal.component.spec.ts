import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderArticlesModalComponent } from './finder-articles-modal.component';

describe('SearchModalComponent', () => {
  let component: FinderArticlesModalComponent;
  let fixture: ComponentFixture<FinderArticlesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderArticlesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinderArticlesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
