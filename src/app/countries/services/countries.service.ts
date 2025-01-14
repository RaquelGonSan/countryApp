import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(err => of([])),
      delay(2000)
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.baseUrl}/alpha/${code}`)
    .pipe(
      map( countries => countries.length > 0 ? countries[0] : null),
      catchError(err => of(null)),
      
    )
  }

  searchCapital(term: string): Observable<Country[]> {
    /*return this.http.get<Country[]>(`${this.baseUrl}/capital/${term}`)  
    .pipe(
      catchError(err => of([]))
    );*/
     return this.getCountriesRequest(`${this.baseUrl}/capital/${term}`);
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.baseUrl}/name/${term}`);

  }

  searchRegion(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.baseUrl}/region/${term}`);
  }



}
