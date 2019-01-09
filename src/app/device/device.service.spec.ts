import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { DeviceService } from './device.service'

describe('DeviceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  )

  it('should be created', () => {
    const service: DeviceService = TestBed.get(DeviceService)
    expect(service).toBeTruthy()
  })
})
