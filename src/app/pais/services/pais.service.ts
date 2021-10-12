import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'http://api.countrylayer.com/v2/'
  private token: string = '?access_key=';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}name/${termino}${this.token}`;
    return this.http.get<Country[]>(url);

  }

  buscarCaptial(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}capital/${termino}${this.token}`
    return this.http.get<Country[]>(url);

  }

  buscarPorAlpha(id: string): Observable<Country> {
    const url: string = `${this.apiUrl}alpha/${id}${this.token}`;
    return this.http.get<Country>(url);

  }

  buscarPorRegion(region: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}regionalbloc/${region}${this.token}`;
    return this.http.get<Country[]>(url);

  }

}
