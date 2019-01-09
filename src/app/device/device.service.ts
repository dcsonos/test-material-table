import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { ISelectedDevice } from '../interfaces'

export interface IDeviceService {
  getDeviceList(): Observable<ISelectedDevice[]>
}

@Injectable({
  providedIn: 'root',
})
export class DeviceService implements IDeviceService {
  constructor(private httpClient: HttpClient) {}

  getDeviceList(): Observable<ISelectedDevice[]> {
    return this.httpClient
      .get<ISelectedDevice[]>(`${environment.baseUrl}/api/device/list`)
      .pipe(
        map(data => {
          console.log(data)
          return data
        })
      )
  }
}
