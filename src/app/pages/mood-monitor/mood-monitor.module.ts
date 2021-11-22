import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodMonitorPageRoutingModule } from './mood-monitor-routing.module';

import { MoodMonitorPage } from './mood-monitor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodMonitorPageRoutingModule
  ],
  declarations: [MoodMonitorPage]
})
export class MoodMonitorPageModule {}
