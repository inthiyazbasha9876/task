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
  timeIntervalArray = []
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
    let obj = {
      name: this.detailsForm.value.name,
      gender: this.detailsForm.value.gender,
      freezeTime: null,
      function: null
    }
    obj.freezeTime = this.seconds(this.detailsForm.value.freezeTime)
    obj.function = setInterval(()=>{
      if(obj.freezeTime>0){
        --obj.freezeTime
      }else{
        clearInterval(obj.function)
      }
    },1000)
    this.cardDetails.push(obj)
  }


  seconds(e) {
    let a = e.split(':');
    let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    return seconds;
  }


  // this.countDown = timer(0, this.tick).subscribe(() => {
  //   if (obj.freezeTime > 0) {
  //     --obj.freezeTime;
  //   }
  // });
}
