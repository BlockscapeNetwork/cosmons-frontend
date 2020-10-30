import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  balance: string;

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.transferService.getAccount().then((value) => {
      const addr = value.address.toString();
      this.transferService.queryCW20Token(environment.contractAddress20, addr).then((value) => {
        this.balance = value.balance;
      });
    });

  }

}
