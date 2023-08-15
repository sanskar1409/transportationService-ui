import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  subscriptionPlan: any;

  constructor(private http: HttpClient) { }

  get(url: string, queryParams?: any) {
    return this.http.get(environment.baseUrl + url, queryParams);
  }

  post(url: string, data: any) {
    return this.http.post(environment.baseUrl + url, data);
  }
}
