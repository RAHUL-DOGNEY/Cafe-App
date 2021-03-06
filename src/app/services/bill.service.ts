import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  [x: string]: any;
  url = environment.apiUrl;

  constructor() { }

  generateReport(data: any){
    return this.httpClient.post(this.url+
      "/bill/generateReport/",data,{
        headers: new HttpHeaders().set('Content-Type',"application/json")
      })
  }
  getPDF(data:any):Observable<Blob>{
    return this.httpClient.post(this.url + "/bill/getPdf",data,{responseType:'blob'});
  }

}
