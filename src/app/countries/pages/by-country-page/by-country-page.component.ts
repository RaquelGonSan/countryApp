import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  listCountries: Country[] = [];

 constructor( private countryService: CountriesService ){}

 searchByCountry(term: string): void{
  this.countryService.searchCountry(term).subscribe({
    next: (countries) => {
      this.listCountries = countries;
      console.log(this.listCountries)
    }
  })

 }

}
