import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  apiUrl = environment.backendUrl

  constructor(private http:HttpClient) { }

  get(url:String){
    return this.http.get(`${this.apiUrl}/${url}`)
  }

  post(url:any,payload:any){
    return this.http.post(`${this.apiUrl}/${url}`,payload)
  }

  put(url:any,payload:any){
    return this.http.put(`${this.apiUrl}/${url}`,payload)
  }

  delete(url:any){
    return this.http.delete(`${this.apiUrl}/${url}`)
  }
}
