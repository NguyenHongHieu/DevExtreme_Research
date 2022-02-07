
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private route: Router, private httpClient: HttpClient) {
  }

  get baseURL(): string {
    return 'http://localhost:3000';
  }

  // get headerAuthorizationKey(): string {
  //   return 'Bearer ' + sessionStorage.getItem('tk');
  // }

  get options() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient
      .get<T>(`${this.baseURL}/${url}`, this.options)
      .pipe(catchError((error) => this.handleError(error)));
  }

  post<T>(url: string, data: any, isCatchError: boolean = true): Observable<T> {
    return this.httpClient
      .post<T>(`${this.baseURL}/${url}`, data, this.options)
      .pipe(catchError(isCatchError ? this.handleError : (error) => throwError(error)));
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.httpClient
      .put<T>(`${this.baseURL}/${url}`, data, this.options)
      .pipe(catchError(this.handleError));
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient
      .delete<T>(`${this.baseURL}/${url}`, this.options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let messageError = "ERRR";
    return throwError(messageError);
  }
}
