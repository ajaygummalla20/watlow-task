import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCocktails(name: string): Observable<any> {
  return !!name ? this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`) : of(null);
}

}
