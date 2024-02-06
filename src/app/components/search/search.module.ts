import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../home/core.module';
import { ArtistCardsComponent } from '../artist-cards/artist-cards.component';
import { NoImagePipe } from 'src/app/pipes/noimage.pipe';
import { LoadingModule } from '../loading/loading.module';



@NgModule({
  declarations: [SearchComponent, ArtistCardsComponent, NoImagePipe],
  imports: [
    SearchRoutingModule,
    CommonModule,
    HttpClientModule,
    CoreModule,
    LoadingModule
  ],
  exports: [SearchComponent, ArtistCardsComponent, NoImagePipe]
})
export class SearchModule { }
