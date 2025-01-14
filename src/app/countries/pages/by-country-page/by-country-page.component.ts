import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit{

  listCountries: Country[] = [];
  initialValue: string = '';

 constructor( private countryService: CountriesService ) {}

 ngOnInit(): void {
   this.listCountries = this.countryService.cacheStore.byCountry.countries;
   this.initialValue = this.countryService.cacheStore.byCountry.term;
 }

 searchByCountry(term: string): void{
  this.countryService.searchCountry(term).subscribe({
    next: (countries) => {
      this.listCountries = countries;
      //console.log(this.listCountries)
    }
  })

 }

}
