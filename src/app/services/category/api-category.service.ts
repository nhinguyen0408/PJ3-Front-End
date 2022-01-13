import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Category } from 'src/app/model/Category.model';
import { Production } from 'src/app/model/Production.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCategoryService {

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
  getCategory():Observable<Category>{
    return this.http.get<Category>(this.url+"/category/getall").pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(this.url+"/category/create", category, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  editCategory(category: Category):Observable<Category>{
    return this.http.put<Category>(this.url+"/category/update", JSON.stringify(category), this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
}
