import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DeviceService } from './device/device.service'
import { SelectedDeviceComponent } from './selected-device/selected-device.component'

@NgModule({
  declarations: [AppComponent, SelectedDeviceComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DeviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
