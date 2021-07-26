import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

 @Output() deviceDetail= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addDevice(form: NgForm){
    // alert('add device');
    this.deviceDetail.emit(form.value);
    console.log(form.value);
  }

}
