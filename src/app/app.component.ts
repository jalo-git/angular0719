import { Component } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-g1-project';
  // title = 'This is my first Angular project';
  // appMessage = "This is for input parameter";

  // appMessageArray = ['hi', 'hello', 'goodbye', 'go', 'stop', 'please'];

  // showComponent = true;
  // appEvent(event){
  //   alert(event);
  // }
  // showHide() {
  //   this.showComponent = !this.showComponent;
  // }

  showUpdate = false;
  
  devices : Device []= [
    {
      name: "KENSUSON",
      brand: "SuperioSon",
      model: "DDKntFx",
      year: 2020,
      serial: "K3n3uS0n"

    },
    {
      name: "PABLO",
      brand: "RadKidz",
      model: "lovkidx",
      year: 2020,
      serial: "ch0NaBT"
    },
    {
      name: "JOSH",
      brand: "SsobGame",
      model: "J0shWITa",
      year: 2020,
      serial: "0712ss"
    }

  ]

  updateDevice(event){
    this.showUpdate = event;
  }

  addDevice(device: Device){
    console.log(device);
    this.devices.push(device);
  }

}