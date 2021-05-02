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

  cardClicked(event: any) {
    console.log(event);
    switch (event.event) {
      case 'call':
        // Call Me (Use Template Literal)
        alert(`Call Me ${event.data}`);
        break;

      case 'send-message':
        // Call Me (Use Template Literal)
        alert(`Send Message ${event.data}`);
        break;
    
      default:
        break;
    }
  }

}
