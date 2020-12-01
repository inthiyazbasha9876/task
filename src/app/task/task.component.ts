import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  allselect=false
  emailsList
  selectedMailsArray=[]
  selectedEmialsList
  companyNameList:any
  companyCodesList:any
  constructor(private service:ServiceService) { 
    this.getdata()
    this.getSelectedData()
    this.getCompanyName()
  }

  ngOnInit() {
  }

  getdata(){
   
    this.service.EmailsList().subscribe(res=>{
      console.log(res);
      this.emailsList=res
    })
  }

  getSelectedData(){
    this.service.selectedEmailsList().subscribe(res=>{
      console.log(res);
      this.selectedEmialsList=res 
      
    })
  }

  selected(event,mail){
    console.log(event,mail);
    if(event.target.checked==true){
      this.selectedMailsArray.push(mail)
      console.log("after push",this.selectedMailsArray);
    }else{
      var index = this.selectedMailsArray.indexOf(mail);
      if(index>-1)
      this.selectedMailsArray.splice(index,1)
      console.log("after pop",this.selectedMailsArray);
    }
  }

  saveEmails(){
    console.log(this.selectedMailsArray);
    for(let i of this.selectedMailsArray){
      this.service.saveDataList(i).subscribe(res=>{
        console.log(res);
        this.getSelectedData()
      })
    }
   
  }

  selectall(){
    if(this.allselect==false)
    this.allselect=true
    else
    this.allselect=false
  }

  getCompanyName(){
    this.service.companyList().subscribe(res=>{
      console.log(res);
      this.companyNameList=res
    })
  }

  getCompanyCodes(event){
      console.log(event.target.value);
      this.companyCodesList=null
      this.service.companyCodeList(event.target.value).subscribe(res=>{
        console.log(res);
        let data=res
        // if(data.length>0){

        // }
        this.companyCodesList=data[0].codes
      })
  }
}
