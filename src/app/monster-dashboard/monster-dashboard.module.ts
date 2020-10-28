import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterRoutingModule } from './monster-dashboard-routing.module';
import { TransferService } from './services/transfer.service';
import { MonsterDashboardComponent } from './pages/monster-dashboard/monster-dashboard.component';



@NgModule({
  declarations: [MonsterDashboardComponent],
  imports: [
    CommonModule,
    MonsterRoutingModule
  ],
  exports: [],
  providers: []
})
export class MonsterDashboardModule { }
