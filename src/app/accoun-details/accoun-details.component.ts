import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accoun-details',
  templateUrl: './accoun-details.component.html',
  styleUrls: ['./accoun-details.component.scss']
})
export class AccounDetailsComponent implements OnInit {

  transactionForm = new FormGroup({
    spendMoney: new FormControl('',Validators.required),
    reason: new FormControl('',Validators.required),
  })
  accountDetails:any
  trasactionsArray=[]
  constructor() {
    this.accountDetails={
      accountBalance:4500,
      allTarnsactions:[
        {
          amount:500,
          reason:'Interest',
          transactionMode:'credit',
          balanceAmount:4500,
          transactionDate:new Date()
        }
      ]
    }
    this.allTranscations()
   }

  ngOnInit() {
  }

  transaction(mode){
    let transactionObj={
      amount:this.transactionForm.value.spendMoney,
      reason:this.transactionForm.value.reason,
      transactionMode:mode,
      balanceAmount:null,
      transactionDate:new Date()
    }
    if(mode=='debit'){
      if(this.accountDetails.accountBalance == 0){
      }else{
        this.accountDetails.accountBalance -=Number(this.transactionForm.value.spendMoney)
        transactionObj.balanceAmount=this.accountDetails.accountBalance
        this.accountDetails.allTarnsactions.push(transactionObj)
      }
    }else{
      this.accountDetails.accountBalance +=Number(this.transactionForm.value.spendMoney)
      this.accountDetails.allTarnsactions.push(transactionObj)
    }
   
  }
  allTranscations(){
    this.trasactionsArray=[]
    this.trasactionsArray=this.accountDetails.allTarnsactions
  }

  debitTranactions(){
    this.trasactionsArray=[]
    this.trasactionsArray=this.accountDetails.allTarnsactions.filter(a=> a.transactionMode == 'debit')
  }
  cerditTranactions(){
    this.trasactionsArray=[]
    this.trasactionsArray=this.accountDetails.allTarnsactions.filter(a=> a.transactionMode == 'credit')
  }
}
