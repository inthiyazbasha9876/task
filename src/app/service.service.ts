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

  companyList(){
    return this.http.get("http://localhost:3000/companyList")
  }

  companyCodeList(id){
    return this.http.get("http://localhost:3000/companyCodes?companyId="+id)
  }



  //pluraltask

  getallData(){
    return this.http.get("http://localhost:3000/pluralTask")
  }
  
  postdata(data){
    return this.http.post("http://localhost:3000/pluralTask",data)
  }

  idbasedupdate(id,data){
    return this.http.put("http://localhost:3000/pluralTask/"+id,data)
  }

  idbaseddelete(id){
    return this.http.delete("http://localhost:3000/pluralTask/"+id)
  }

}
