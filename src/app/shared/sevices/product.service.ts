import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // local
  private appurl: any = 'http://localhost:3011/api';
  // server
  // private appurl:any = 'https://sffzkxpp8m.ap-south-1.awsapprunner.com/api';
  constructor(
    private httpClient: HttpClient
  ) {
  }

  getProduct(): Observable<any> {
    return this.httpClient.get<any>(this.appurl + '/getProductDetails/getProduct').pipe(map(response => response));
  }
  getProductCategory(category:string): Observable<any> {
    return this.httpClient.get<any>(this.appurl + '/getProductDetails/getProductCategory/' + category).pipe(map(response => response));
  }
  getProductDetails(id: any): Observable<any> {
    return this.httpClient.get<any>(this.appurl + '/getProductDetails/getProductDetails/' + id).pipe(map(response => response));
  }
  createOrder(order: any): Observable<any> {
    return this.httpClient.post<any>(this.appurl + '/razorpay/createOrder', order).pipe(map(response => response));
  }
  payment(payment: any): Observable<any> {
    return this.httpClient.post<any>(this.appurl + '/razorpay/payment', payment).pipe(map(response => response));
  }
  getUserDetails(): Observable<any> {
    return this.httpClient.get<any>(this.appurl + '/getUser/getUserDetails').pipe(map(response => response));
  }
}
