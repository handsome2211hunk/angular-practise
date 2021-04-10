import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/shared/_http/country.service';

@Component({
  selector: 'app-prac1',
  templateUrl: './prac1.component.html',
  styleUrls: ['./prac1.component.scss']
})
export class Prac1Component implements OnInit {

  jobList: any[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    this.countryService.getAllJobs().subscribe(
      data => {
        this.jobList = data;
        console.log(this.jobList);
      }
    )
  }

}
