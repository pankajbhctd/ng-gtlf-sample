import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GltfComponent } from './gltf/gltf.component';
import { View360Component } from './view360/view360.component';

const routes: Routes = [
  {
    path: '',
    component: GltfComponent,
  },
  {
    path: '360',
    component: View360Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
