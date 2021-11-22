import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'modules',
        loadChildren: () => import('../pages/modules/modules.module').then( m => m.ModulesPageModule)
      },
      {
        path: 'mood-monitor',
        loadChildren: () => import('../pages/mood-monitor/mood-monitor.module').then( m => m.MoodMonitorPageModule)
      },
      {
        path: 'toolbox',
        loadChildren: () => import('../pages/toolbox/toolbox.module').then( m => m.ToolboxPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
