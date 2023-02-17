import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiurl= 'http://localhost:3000/users';

  GetAll(){
    return this.http.get(this.apiurl);
  }

  GetbyCode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  ProceedRegister(data:any){
    return this.http.post(this.apiurl,data);
  }

  Updateuser(code:any,data:any){
    return this.http.put(this.apiurl+ '/'+code,data)
  }
}
