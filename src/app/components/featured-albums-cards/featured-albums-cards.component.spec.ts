import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAlbumsComponent } from './featured-albums-cards.component';

describe('FeaturedAlbumsComponent', () => {
  let component: FeaturedAlbumsComponent;
  let fixture: ComponentFixture<FeaturedAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedAlbumsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
