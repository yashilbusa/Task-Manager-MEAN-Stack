import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  private apiUrl = "http://localhost:3030"
  constructor(private http:HttpClient) { }

  get(url:String){
    return this.http.get(`${this.apiUrl}/${url}`)
  }

  post(url:String,payload:String){
    return this.http.post(`${this.apiUrl}/${url}`,payload)
  }

  put(url:String,payload:String){
    return this.http.put(`${this.apiUrl}/${url}`,payload)
  }

  delete(url:String){
    return this.http.delete(`${this.apiUrl}/${url}`)
  }
}
