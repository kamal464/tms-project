import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly apiUrl = 'http://192.168.0.55:5000/dropdown/getcountry';


  constructor(private http: HttpClient) { }

  getCountries(): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl,{});
  }

  saveCountry(countryData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, countryData);
  }




}
