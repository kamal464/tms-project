import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../countryservice.service';

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent {
  countries: any = [{
    "id": "IND",
    "country": "India",

  },{
    "id": "us",
    "country": "america",
  },
  {
    "id": "pak",
    "country": "pakistan",
  },
  {
    "id": "ca",
    "country": "canada",
  }];
  selectedCountry: any;


  constructor(private countryService: CountryService) { }

  ngOnInit() {
    // this.countryService.getCountries().subscribe(countries => {
    //   this.countries = countries;
    // });
  }

  onCountrySelected() {
    
    const selectedCountry = this.countries.find(c => c.id === this.selectedCountry);
    this.countryService.saveCountry(selectedCountry).subscribe(() => {
      console.log(`Saved country: ${selectedCountry.country}`);
    });
  }


}
