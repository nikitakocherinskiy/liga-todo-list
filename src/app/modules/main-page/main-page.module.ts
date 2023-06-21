import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDescriptionComponent } from './main-description/main-description.component';

@NgModule({
  declarations: [MainDescriptionComponent],
  imports: [CommonModule],
  exports: [MainDescriptionComponent],
})
export class MainPageModule {}
