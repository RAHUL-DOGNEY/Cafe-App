import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url=environment.apiUrl;
  constructor(private httpClient: HttpClient) {  }
// *********** Signup ***********
  signup(data:any){
    return this.httpClient.post(this.url+
      "/users/signup", data,{
        headers: new HttpHeaders().set('Content-Type', "application/json")
      });
  }


  // signup(data:any){
  //   return this.httpClient.post(this.url+
  //     "/users/register", data,{
  //       headers: new HttpHeaders().set('Content-Type', "application/json")
  //     });
  // }
  // *********** Forgot Password ***********
  forgotPassword(data:any){
    return this.httpClient.post(this.url+
      "/user/forgotPassword", data,{
        headers: new HttpHeaders().set('Content-Type', "application/json")
      });
  }
// *********** Login ***********
login(data:any){
  return this.httpClient.post(this.url +
     "/users/login", data,{
       headers: new HttpHeaders().set('Content-Type', "application/json")
     })
  }

  // token
  checkToken(){
    return this.httpClient.get(this.url +"/user/checkToken");
  }

// ChangePassword
  changePassword(data: any){
    return this.httpClient.post(this.url +"/user/changePassword",data,{headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

}
