import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {

  listCountries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

constructor( private countriesService: CountriesService ){}

ngOnInit(): void {
  this.listCountries = this.countriesService.cacheStore.byCapital.countries;
  this.initialValue = this.countriesService.cacheStore.byCapital.term;
}

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
