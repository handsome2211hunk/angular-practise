import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/shared/_http/country.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  // Variables
  jobList: any[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs() {
    this.countryService.getAllJobs().subscribe(
      data => {
        this.jobList = data;
        console.log(this.jobList);
      }
    );
  }

}
