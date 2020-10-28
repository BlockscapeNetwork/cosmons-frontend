import { Component, OnInit } from '@angular/core';
import { TransferService, ExBankBalancesResponse } from '../../services/transfer.service';

@Component({
  selector: 'app-monster-dashboard',
  templateUrl: './monster-dashboard.component.html',
  styleUrls: ['./monster-dashboard.component.scss']
})
export class MonsterDashboardComponent implements OnInit {
  acc: ExBankBalancesResponse;
  constructor(private transferService: TransferService) {
  }

  ngOnInit(): void {
    this.transferService.getAccount().then((value) => { this.acc = value });
    this.transferService.queryMonster('cosmos1pgvk0pzmmrz5syz3dxxfav39pe8h5unxdrx5e0', 'monster112a9lf95atqvyejqe22xnna8x4mfqd75tkq2kvwcjyysarcsb').then((value) => { console.log(JSON.stringify(value)) });
    this.transferService.queryAllInfoMonster('cosmos1pgvk0pzmmrz5syz3dxxfav39pe8h5unxdrx5e0', 'monster112a9lf95atqvyejqe22xnna8x4mfqd75tkq2kvwcjyysarcsb').then((value) => { console.log(JSON.stringify(value)) });
    this.transferService.queryNumOfMonster('cosmos1pgvk0pzmmrz5syz3dxxfav39pe8h5unxdrx5e0').then((value) => { console.log(JSON.stringify(value)) });
  }

}
