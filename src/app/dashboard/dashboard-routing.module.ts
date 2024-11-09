import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ControlRoomComponent } from './components/control-room/control-room.component';
import { ElementsComponent } from './components/elements/elements.component';
import { HomeComponent } from './components/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeModule } from './components/home/home.module';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '',redirectTo: 'home',pathMatch: 'full'},
      { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
      { path: 'control-room', component: ControlRoomComponent, title: 'control-room' },
      { path: 'elements', component: ElementsComponent, title: 'elements' },
      { path: 'settings', component: SettingsComponent, title: 'settings' },
      { path: 'notifications', component: NotificationsComponent, title: 'notifications' }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
