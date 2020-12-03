import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-freeze',
  templateUrl: './freeze.component.html',
  styleUrls: ['./freeze.component.scss']
})
export class FreezeComponent implements OnInit {

  detailsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    freezeTime: new FormControl('', [Validators.required]),
  })

  cardDetails = [];
  dummyData = [];
  freezetask = false
  searchItem: any
  interval
  timeLeft: any
  constructor() { }

  ngOnInit() {
    
  }

  savedData() {
    console.log(this.detailsForm.value);
    this.cardDetails.push(this.detailsForm.value)
    console.log(this.cardDetails);
    this.dummyData = this.cardDetails
  }

  search(event) {
    if (event) {
      this.cardDetails = this.cardDetails.filter(data => data.name == event)
      if (this.cardDetails.length > 0) {
        this.timeLeft = Number(this.cardDetails[0].freezeTimeMinutes) + Number(this.cardDetails[0].freezeTimeMinutes) * 60 + Number(this.cardDetails[0].freezeTimeSeconds)
        this.freezetask = true
        this.startTimer()
      }
    } else {
      this.cardDetails = this.dummyData
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.freezetask = false
        this.timeLeft = null
        return;
      }
    }, 1000);
    console.log(this.interval);
  }


}
