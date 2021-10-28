import { Injectable } from '@angular/core';
import { Device } from './device';
import { DEVICES } from './mock-devices';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getDevices(): Observable<Device[]> {
    const devices = of(DEVICES);
    return devices;
  }
}
