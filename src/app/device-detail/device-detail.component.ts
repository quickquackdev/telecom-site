import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../device';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() device?: Device;

}
