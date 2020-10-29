import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterRoutingModule } from './monster-dashboard-routing.module';
import { MonsterDashboardComponent } from './pages/monster-dashboard/monster-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [MonsterDashboardComponent, MonsterCardComponent],
  imports: [
    CommonModule,
    MonsterRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [],
  providers: []
})
export class MonsterDashboardModule { }
