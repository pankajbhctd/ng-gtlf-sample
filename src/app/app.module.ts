import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGltfViewerModule } from 'ngx-gltf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View360Component } from './view360/view360.component';
import { GltfComponent } from './gltf/gltf.component';
declare global {
  interface Window {
    CI360: any;
  }
}
@NgModule({
  declarations: [AppComponent, View360Component, GltfComponent],
  imports: [BrowserModule, NgxGltfViewerModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
