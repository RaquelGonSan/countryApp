import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  listCountries: Country[] = [];
  public isLoading: boolean = false;

constructor( private countriesService: CountriesService ){}

  searchByCapital(term: string): void{
    this.isLoading = true;
    this.countriesService.searchCapital(term).subscribe({
      next: (countries) => {
        this.listCountries = countries;
        this.isLoading = false;
      }
    });
  }

}
