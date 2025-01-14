import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  country?: Country;

  constructor( private activatedRoute: ActivatedRoute, private countriesService: CountriesService, private router: Router ){}

  //una manera de hacerlo pero ay funciones dentro de funciones
  /*ngOnInit(): void {
    this.activatedRoute.params.subscribe(( ({id}) => {
     this.searchCountry(id);
    }))
  }

  searchCountry(code: string){
    this.countriesService.searchCountryByAlphaCode(code).subscribe( country => {
      console.log(country);
    })
  }*/

  //una mejor implementacion a traves de rxjs con switchMap
  ngOnInit(): void {
    console.log('entro')
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id)) //recibe el valor anterior y regregresa un nuevo Observable
    )
    .subscribe( country => {
      if(!country){
        console.log('NO HAY PAIS');
        return this.router.navigateByUrl('');
       
      }
      console.log(country);
      return this.country = country;
    })
    
  }

}
