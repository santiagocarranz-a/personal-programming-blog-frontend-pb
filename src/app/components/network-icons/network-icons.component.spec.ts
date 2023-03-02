import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkIconsComponent } from './network-icons.component';

describe('NetworkIconsComponent', () => {
  let component: NetworkIconsComponent;
  let fixture: ComponentFixture<NetworkIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
