import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{

  listCountries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion?: Region;


  constructor( private countriesService: CountriesService){}

  ngOnInit(): void {
   this.listCountries = this.countriesService.cacheStore.byRegion.countries;
   this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(term: Region):void{
    this.selectedRegion = term;
    this.countriesService.searchRegion(term).subscribe({
      next: (contries) => {
        this.listCountries = contries
      }
    })
  }
  

}
