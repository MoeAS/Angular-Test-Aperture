import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core.module';
import { FeaturedAlbumsComponent } from '../featured-albums-cards/featured-albums-cards.component';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [HomeComponent, FeaturedAlbumsComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    HttpClientModule,
    CoreModule,
    LoadingModule
  ],

  exports: [HomeComponent, FeaturedAlbumsComponent]
})
export class HomeModule { }
