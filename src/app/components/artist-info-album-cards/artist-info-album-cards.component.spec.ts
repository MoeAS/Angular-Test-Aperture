import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistInfoAlbumCardsComponent } from './artist-info-album-cards.component';

describe('ArtistInfoAlbumCardsComponent', () => {
  let component: ArtistInfoAlbumCardsComponent;
  let fixture: ComponentFixture<ArtistInfoAlbumCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistInfoAlbumCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistInfoAlbumCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
