import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterArtistComponent } from './register-artist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterArtistComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RegisterArtistComponent]
})
export class RegisterArtistModule { }
