import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Item } from '../item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getItems(page: number): Observable<Item[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('page', page.toString());

    return this.httpClient.get<Item[]>('https://api.fashbash.co/api/feed', {
      params: params
    });
  }
}
