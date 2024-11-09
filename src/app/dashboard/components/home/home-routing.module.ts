import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GraphComponent } from './components/graph/graph.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent,children: [
      {path: '',redirectTo: 'graph',pathMatch: 'full'},
      { path: 'graph', component: GraphComponent, title: 'graph' },
      { path: 'list', component: ListComponent, title: 'list' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
