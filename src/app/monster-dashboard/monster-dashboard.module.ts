import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterRoutingModule } from './monster-dashboard-routing.module';
import { MonsterDashboardComponent } from './pages/monster-dashboard/monster-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { GameOwnerComponent } from './pages/game-owner/game-owner.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';


@NgModule({
  declarations: [MonsterDashboardComponent, MonsterCardComponent, GameOwnerComponent, HowToPlayComponent],
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
