import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Listar1Component } from './listar1/listar1.component';



@NgModule({
  declarations: [Listar1Component],
  imports: [
    CommonModule
  ],
  exports: [
    Listar1Component
  ]
})
export class ComponentsModule { }
