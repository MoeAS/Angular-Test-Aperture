import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Artists } from 'src/app/models/search.interface';

@Component({
  selector: 'app-artist-cards',
  templateUrl: './artist-cards.component.html',
  styleUrl: './artist-cards.component.scss'
})
export class ArtistCardsComponent {
  @Input() artists!: Artists;
  
  constructor (private router: Router) {}

  goToArtistPage(artist_id: string) {
    this.router.navigate(['/artist-info', artist_id]);
  }
}
