import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }
  
  getAll(modelName: string): Observable<any[]> {
    return this.http.get(this.url + modelName) as Observable<any[]>;
  }
  
  get(modelName: string, id: number): Observable<any> {
    return this.http.get(this.url + modelName + "/" + id);
  }
  
  post(modelName: string, data: any): Observable<any> {
    return this.http.post(this.url + modelName, data);
  }
  
  put<T>(modelName: string, data: any, id: number): Observable<any> {
    return this.http.put<T>(this.url + modelName + "/" + id, data);
  }
  
  delete(modelName: string, id: number): Observable<any> {
    return this.http.delete(this.url + modelName + "/" + id);
  }
}
