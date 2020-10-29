import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOwnerComponent } from './pages/game-owner/game-owner.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { MonsterDashboardComponent } from './pages/monster-dashboard/monster-dashboard.component';

const routes: Routes = [
  { path: '', component: MonsterDashboardComponent },
  { path: 'gameowner', component: GameOwnerComponent },
  { path: 'howtoplay', component: HowToPlayComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class MonsterRoutingModule { }