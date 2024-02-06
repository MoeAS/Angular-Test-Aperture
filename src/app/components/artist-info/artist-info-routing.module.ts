import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistInfoComponent } from './artist-info.component';


const routes: Routes = [
  { path: '', component: ArtistInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistInfoRoutingModule { }
