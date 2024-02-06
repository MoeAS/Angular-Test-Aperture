import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../home/core.module';
import { LoadingComponent } from '../loading/loading.component';



@NgModule({
  declarations: [SearchComponent, LoadingComponent],
  imports: [
    SearchRoutingModule,
    CommonModule,
    HttpClientModule,
    CoreModule
  ],
  exports: [SearchComponent, LoadingComponent]
})
export class SearchModule { }
