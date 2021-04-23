import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

const url = `${environment.apiUrl}/api/search/posts`;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPosts(params: any): Observable<any> {
    return this.httpClient.post<any>(url, params).pipe(map(response => {
      return response;
    }, error => {
      return error;
    }));
  }
}
