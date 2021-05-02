import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  // GET
  getAllJobs(): Observable<any> {
    // Template Literals (JS >> ES6)
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
  }
}
