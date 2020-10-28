import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterRoutingModule } from './monster-dashboard-routing.module';
import { MonsterDashboardComponent } from './pages/monster-dashboard/monster-dashboard.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [MonsterDashboardComponent],
  imports: [
    CommonModule,
    MonsterRoutingModule,
    MatCardModule
  ],
  exports: [],
  providers: []
})
export class MonsterDashboardModule { }
