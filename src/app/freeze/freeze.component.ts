import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-freeze',
  templateUrl: './freeze.component.html',
  styleUrls: ['./freeze.component.scss']
})
export class FreezeComponent implements OnInit {

  detailsForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    freezeTime:new FormControl('',[Validators.required])
  })
  constructor() { }

  ngOnInit() {
  }

 
}
