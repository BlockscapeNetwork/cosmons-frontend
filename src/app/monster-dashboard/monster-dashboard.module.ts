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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BattleAreaComponent } from './pages/battle-area/battle-area.component';

@NgModule({
  declarations: [MonsterDashboardComponent, MonsterCardComponent, GameOwnerComponent, HowToPlayComponent, BattleAreaComponent],
  imports: [
    CommonModule,
    MonsterRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [MonsterDashboardComponent],
  providers: []
})
export class MonsterDashboardModule { }
