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
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { Cw20FaucetComponent } from './pages/cw20-faucet/cw20-faucet.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MonsterDashboardComponent,
    MonsterCardComponent,
    GameOwnerComponent,
    HowToPlayComponent,
    BattleAreaComponent,
    MarketplaceComponent,
    Cw20FaucetComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
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
