import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // local
  // private appurl:any = 'http://localhost:3011/api';
  // server
  private appurl:any = 'https://sffzkxpp8m.ap-south-1.awsapprunner.com/api';
  constructor(
    private httpClient: HttpClient
  ) {
  }

  getProduct(): Observable<any> {
    return this.httpClient.get<any>(this.appurl + '/getProductDetails/getProduct').pipe(map(response => response));
  }
}
