import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistInfoComponent } from './artist-info.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from '../loading/loading.module';
import { ArtistInfoRoutingModule } from './artist-info-routing.module';
import { NgxStarsModule } from 'ngx-stars';
import { ArtistInfoAlbumCardsComponent } from '../artist-info-album-cards/artist-info-album-cards.component';


@NgModule({
  declarations: [ArtistInfoComponent, ArtistInfoAlbumCardsComponent],
  imports: [
    ArtistInfoRoutingModule,
    CommonModule,
    HttpClientModule,
    LoadingModule,
    NgxStarsModule
  ],
  exports: [ArtistInfoComponent, ArtistInfoAlbumCardsComponent]
})
export class ArtistInfoModule { }