import { Component, OnInit } from '@angular/core'
import { DeviceService } from '../device/device.service'
import { ISelectedDevice } from '../interfaces'

@Component({
  selector: 'app-selected-device',
  templateUrl: './selected-device.component.html',
  styleUrls: ['./selected-device.component.css'],
})
export class SelectedDeviceComponent implements OnInit {
  current: ISelectedDevice

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.deviceService.getDeviceList().subscribe(data => (this.current = data[0]))
  }
}
