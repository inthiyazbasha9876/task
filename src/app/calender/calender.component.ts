import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  dates = []
  today
  dateType=''
  project = [
    {
      projectName: 'OBS',
      projectId: "OBS-001"
    },
    {
      projectName: 'RPO',
      projectId: "RPO-002"
    },
    {
      projectName: 'KEEP',
      projectId: "KP-003"
    },
    {
      projectName: 'PayVoo',
      projectId: "PV-004"
    }
  ]
  constructor() {
    this.today = new Date()
  }

  ngOnInit() {
    this.getWeekDates(this.today)
    
  }


  getWeekDates(date) {
    this.dateType='week'
    this.dates = []
    var n = 1;
    while (n <= 7) {
      var from = new Date(date.getFullYear(), date.getMonth(), date.getDate() - (date.getDay() - n))
      this.dates.push(from)
      n++;
    }
    console.log("dates", this.dates)
  }

  getMonthDates(date) {
    this.dateType='month'
    var days = this.getdays(date.getMonth() + 1, date.getFullYear())
    this.dates = []
    var n = 1;
    while (n <= days) {
      var from = new Date(date.getFullYear(), date.getMonth(), n)
      this.dates.push(from)
      n++;
    }
    console.log("dates", this.dates)
  }


  getdays(month, year) {
    return new Date(year, month, 0).getDate();
  }

  previous() {
    var oldDate = this.dates[0]
    if (this.dateType == 'week') {
      this.today = new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate() - 7)
      this.getWeekDates(this.today)
    } else if (this.dateType == 'month') {
      if (oldDate.getMonth() == 0) {
        this.today = new Date(oldDate.getFullYear() - 1, 11, 1)
        this.getMonthDates(this.today)
      } else { 
        this.today = new Date(oldDate.getFullYear(), oldDate.getMonth() - 1, 1)
        this.getMonthDates(this.today)
      }
    }
  }

  next() {
    var oldDate = this.dates[this.dates.length - 1]
    if (this.dateType == 'week') {
      this.today = new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate() + 1)
      this.getWeekDates(this.today)
    } else if (this.dateType == 'month') {
      if (oldDate.getMonth() == 11) {
        this.today = new Date(oldDate.getFullYear() + 1, 0, 1)
        this.getMonthDates(this.today)
      } else {
        this.today = new Date(oldDate.getFullYear(), oldDate.getMonth() + 1, 1)
        this.getMonthDates(this.today)
      }
    }
  }





  
}
