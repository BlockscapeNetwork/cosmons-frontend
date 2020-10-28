import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterDashboardComponent } from './pages/monster-dashboard/monster-dashboard.component';

const routes: Routes = [
  { path: '', component: MonsterDashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class MonsterRoutingModule { }