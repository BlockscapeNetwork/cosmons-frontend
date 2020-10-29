import { Component, OnInit } from '@angular/core';
import { TransferService, ExBankBalancesResponse } from '../../services/transfer.service';

export interface MonsterInfo {
  address: String,
  access: {
    owner: String,
    approvals: []
  },
  info:
  {
    name: String,
    level: number,
    description: string,
    image: any
  }
}

@Component({
  selector: 'app-monster-dashboard',
  templateUrl: './monster-dashboard.component.html',
  styleUrls: ['./monster-dashboard.component.scss']
})
export class MonsterDashboardComponent implements OnInit {
  acc: ExBankBalancesResponse;
  monsterAddr: [];
  monsterInfoArr: MonsterInfo[];
  constructor(private transferService: TransferService) {
    this.monsterInfoArr = [];
  }

  ngOnInit(): void {
    // Get AccountDetails
    this.transferService.getAccount().then((value) => { this.acc = value });
    // Fetch all possible contract Token/Monster
    this.transferService.queryAllMonsterAddr('cosmos1pgvk0pzmmrz5syz3dxxfav39pe8h5unxdrx5e0').then((value) => {
      this.monsterAddr = value.tokens;
      if (this.monsterAddr.length !== 0) {
        // Fetch more details for every Monster
        this.monsterAddr.forEach(element => {
          this.transferService.queryAllMonsterInfo('cosmos1pgvk0pzmmrz5syz3dxxfav39pe8h5unxdrx5e0', element).then((value: MonsterInfo) => {
            value.address = element;
            this.monsterInfoArr.push(value);
            console.log(JSON.stringify(this.monsterInfoArr))
          });
        });
      }
    });

    // Fetch number of Tokens
    this.transferService.queryNumOfMonster('cosmos1pgvk0pzmmrz5syz3dxxfav39pe8h5unxdrx5e0').then((value) => {
      console.log(JSON.stringify(value))
    });
  }

}
