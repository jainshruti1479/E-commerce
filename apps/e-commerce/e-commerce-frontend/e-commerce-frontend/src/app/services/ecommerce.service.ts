import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  base_url:string = api.apiUrl
  constructor(private http:HttpClient) { }

  signup(credentials:any){
    return this.http.post(this.base_url+'auth/signup',credentials)
  }
}
