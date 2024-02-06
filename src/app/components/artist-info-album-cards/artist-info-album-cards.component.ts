import { Component, Input } from '@angular/core';
import { Albums } from 'src/app/models/search.interface';

@Component({
  selector: 'app-artist-info-album-cards',
  templateUrl: './artist-info-album-cards.component.html',
  styleUrl: './artist-info-album-cards.component.scss'
})
export class ArtistInfoAlbumCardsComponent {
  @Input() artist_albums!: Albums;

  constructor() { }
}
