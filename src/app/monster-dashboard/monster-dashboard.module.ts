import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterRoutingModule } from './monster-dashboard-routing.module';
import { MonsterDashboardComponent } from './pages/monster-dashboard/monster-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [MonsterDashboardComponent],
  imports: [
    CommonModule,
    MonsterRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [],
  providers: []
})
export class MonsterDashboardModule { }
