import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceTryService {
  constructor(private http: HttpClient) { }
  // Uses http.get() to load data from a single API endpoint
  getstate() {
    console.log("called")
    return this.http.get('https://jusbid.in:1337/get-states');
  }
  getcity() {
    return this.http.get('https://jusbid.in:1337/get-cities');
  }
}
