import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ControlRoomComponent } from './components/control-room/control-room.component';
import { HomeComponent } from './components/home/home.component';
import { ElementsComponent } from './components/elements/elements.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    DashboardComponent,
    ControlRoomComponent,
    ElementsComponent,
    SettingsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
]
})
export class DashboardModule { }
