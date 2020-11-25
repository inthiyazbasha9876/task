import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  EmailsList(){
    return this.http.get("http://localhost:3000/mails")
  }
  selectedEmailsList(){
    return this.http.get("http://localhost:3000/selectedMails")
  }
  saveDataList(req){
    return this.http.post("http://localhost:3000/selectedMails",req)
  }
}
