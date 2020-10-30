import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
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
  env_cont = environment.contractAddress721;
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
    this.transferService.queryAllMonsterAddr(environment.contractAddress721).then((value) => {
      this.monsterAddr = value.tokens;
      if (this.monsterAddr.length !== 0) {
        // Fetch more details for every Monster
        this.monsterAddr.forEach(element => {
          this.transferService.queryAllMonsterInfo(environment.contractAddress721, element).then((value: MonsterInfo) => {
            value.address = element;
            this.monsterInfoArr.push(value);
            console.log(JSON.stringify(this.monsterInfoArr))
          });
        });
      }
    });

    // Fetch number of Tokens
    this.transferService.queryNumOfMonster(environment.contractAddress721).then((value) => {
      console.log(JSON.stringify(value))
    });
  }

}
