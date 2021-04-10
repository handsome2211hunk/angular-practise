import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats/stats.component';
import { RouterModule } from '@angular/router';
import { CountryService } from 'src/app/shared/_http/country.service';



@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'', component: StatsComponent
      },
    ])
  ],
  providers: [CountryService]
})
export class DashboardModule { }
