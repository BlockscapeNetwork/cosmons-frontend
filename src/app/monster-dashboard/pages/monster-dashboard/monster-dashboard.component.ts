import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-monster-dashboard',
  templateUrl: './monster-dashboard.component.html',
  styleUrls: ['./monster-dashboard.component.scss']
})
export class MonsterDashboardComponent implements OnInit {
  acc: string;
  constructor(private transferService: TransferService) {
  }

  ngOnInit(): void {
    this.transferService.getAccount().then((value) => { console.log(JSON.stringify(value)) });
  }

}
