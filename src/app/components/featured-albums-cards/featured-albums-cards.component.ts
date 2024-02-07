import { Component, Input } from '@angular/core';
import { NewReleases } from 'src/app/models/albums - artists.interface';

@Component({
  selector: 'app-featured-albums-cards',
  templateUrl: './featured-albums-cards.component.html',
  styleUrl: './featured-albums-cards.component.scss'
})
export class FeaturedAlbumsComponent {
  @Input() featuredAlbums!: NewReleases;
  
  constructor () {}
}
