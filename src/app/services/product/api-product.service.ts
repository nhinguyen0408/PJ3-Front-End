import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Product } from 'src/app/model/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080"
  httpOptions = {
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      "Access-Control-Allow-Headers":'*',
      'Content-type':'application/json',
      'withCredentials': 'true'
    })
  }

  handleError(err: ErrorEvent) {
    let errorMessage = "";
    if(err.error instanceof ErrorEvent){
      errorMessage = err.error.message;
    }
    else {
      errorMessage = `Error code : ${err} \n Message :${err.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getProduct():Observable<any>{
    return this.http.get<any>(this.url+"/product/getall").pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(this.url+"/product/create", product, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  editProduct(product: Product):Observable<Product>{
    return this.http.put<Product>(this.url+"/product/update", JSON.stringify(product), this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
}
