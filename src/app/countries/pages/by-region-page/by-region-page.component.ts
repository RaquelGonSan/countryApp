import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  listCountries: Country[] = [];

  constructor( private countriesService: CountriesService){}

  searchByRegion(term: string):void{
    this.countriesService.searchRegion(term).subscribe({
      next: (contries) => {
        this.listCountries = contries
      }
    })
  }
  

}
