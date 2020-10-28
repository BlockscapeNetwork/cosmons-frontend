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
  }

}
