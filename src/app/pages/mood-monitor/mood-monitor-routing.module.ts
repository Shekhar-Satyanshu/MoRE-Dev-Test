import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoodMonitorPage } from './mood-monitor.page';

const routes: Routes = [
  {
    path: '',
    component: MoodMonitorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoodMonitorPageRoutingModule {}
