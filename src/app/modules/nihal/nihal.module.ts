import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prac1Component } from './prac1/prac1.component';
import { RouterModule } from '@angular/router';
import { CountryService } from 'src/app/shared/_http/country.service';



@NgModule({
  declarations: [
    Prac1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Prac1Component
      }
    ])
  ],
  providers:[CountryService]
})
export class NihalModule { }
