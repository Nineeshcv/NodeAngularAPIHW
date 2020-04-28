import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemInfoService {

  constructor(private http:HttpClient) { }

  public api_url = "http://localhost:3001/system";

  getCPUInformation() :Observable<any>{
    return this.http.get<any>(this.api_url+"/cpu");
  }

  getMemoryInfo(): Observable<any>{
    return this.http.get<any>(this.api_url+"/memory");
  }
  getSystemInfo():Observable<any>{
    return this.http.get<any>(this.api_url+"/system");
  }
}
