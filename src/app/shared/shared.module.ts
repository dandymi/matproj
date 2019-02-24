import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components';
import { UbiPrcMaterialModule } from './material';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    UbiPrcMaterialModule
  ],
  exports: [
    CommonModule,
    UbiPrcMaterialModule,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
