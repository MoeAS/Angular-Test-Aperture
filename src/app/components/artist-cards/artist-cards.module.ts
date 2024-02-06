import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardsComponent } from './artist-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { NoImagePipe } from 'src/app/pipes/noimage.pipe';



@NgModule({
  declarations: [ArtistCardsComponent, NoImagePipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ArtistCardsComponent, NoImagePipe]
})
export class ArtistCardsModule { }