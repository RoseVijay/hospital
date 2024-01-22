import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private appurl:any = 'http://localhost:3011/api';
  constructor(
    private httpClient: HttpClient
  ) {
  }

  getProduct(): Observable<any> {
    return this.httpClient.get<any>(this.appurl + '/getProductDetails/getProduct').pipe(map(response => response));
  }
}
