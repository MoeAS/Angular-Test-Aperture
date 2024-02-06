import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading.component';


@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [LoadingComponent]
})
export class LoadingModule { }