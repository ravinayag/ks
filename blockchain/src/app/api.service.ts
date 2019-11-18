import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 apiURL: string = 'http://149.129.178.119:8080/';

  constructor(private httpClient: HttpClient) {}
  
  public createUser(user: User){
  
    return this.httpClient.post(`${this.apiURL}users/register/create`,user);
  }
  public AllUser(){
      return this.httpClient.get(`${this.apiURL}admin/Allusers`);
  }



}
