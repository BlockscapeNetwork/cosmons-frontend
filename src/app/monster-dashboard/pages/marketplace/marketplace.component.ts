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

  sell(): void {
    this.transferService.sellMonster(
      environment.contractAddress721,
      environment.contractAddressMarket,
      environment.contractAddress20,
      "monster112a9lf95atqvyejqe22xnna8x4mfqd75tkq2kvwcjyysarcsx",
      "50").then((value) => {
        console.log(JSON.stringify(value))
      }).catch((value) => {
        console.log(JSON.stringify(value))
      });
  }

}
