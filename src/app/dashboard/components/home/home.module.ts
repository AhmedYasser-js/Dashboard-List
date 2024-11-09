import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListComponent } from './components/list/list.component';
import { GraphComponent } from './components/graph/graph.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
