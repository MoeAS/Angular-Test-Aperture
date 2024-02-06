import { Component, Input } from '@angular/core';
import { NewReleases } from 'src/app/models/albums - artists.interface';

@Component({
  selector: 'app-song-cards',
  templateUrl: './song-cards.component.html',
  styleUrl: './song-cards.component.scss'
})
export class SongCardsComponent {
  @Input() songs!: NewReleases;
  
  constructor () {}
}
