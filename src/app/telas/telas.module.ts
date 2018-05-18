import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelasRoutingModule } from './telas-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    TelasRoutingModule
  ],
  exports: [
    TelasRoutingModule
  ],
  declarations: [HomeComponent, AboutComponent]
})
export class TelasModule { }
