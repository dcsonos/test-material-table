import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { ISelectedDevice } from '../interfaces'
import { IDeviceService } from './device.service'

@Injectable({
  providedIn: 'root',
})
export class DeviceServiceFake implements IDeviceService {
  private fakeDeviceList: ISelectedDevice[] = [
    {
      id: 1,
      ip: '10.10.0.1',
      name: 'device01',
      latestUpdated: new Date(),
      location: 'ABC',
      model: 'Cisco',
    },
  ]

  public getDeviceList(): Observable<ISelectedDevice[]> {
    return of(this.fakeDeviceList)
  }
}
