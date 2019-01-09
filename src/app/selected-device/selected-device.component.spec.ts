import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { DeviceService } from '../device/device.service'
import { DeviceServiceFake } from '../device/device.service.fake'
import { SelectedDeviceComponent } from './selected-device.component'

describe('SelectedDeviceComponent', () => {
  let component: SelectedDeviceComponent
  let fixture: ComponentFixture<SelectedDeviceComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedDeviceComponent],
      providers: [{ provide: DeviceService, useClass: DeviceServiceFake }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedDeviceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
