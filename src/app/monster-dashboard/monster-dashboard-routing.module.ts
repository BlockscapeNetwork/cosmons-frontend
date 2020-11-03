import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleAreaComponent } from './pages/battle-area/battle-area.component';
import { Cw20FaucetComponent } from './pages/cw20-faucet/cw20-faucet.component';
import { GameOwnerComponent } from './pages/game-owner/game-owner.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { MonsterDashboardComponent } from './pages/monster-dashboard/monster-dashboard.component';

const routes: Routes = [
  { path: '', component: MonsterDashboardComponent },
  { path: 'gameowner', component: GameOwnerComponent },
  { path: 'howtoplay', component: HowToPlayComponent },
  { path: 'battle', component: BattleAreaComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'faucet', component: Cw20FaucetComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class MonsterRoutingModule { }