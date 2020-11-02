import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TransferService } from '../../services/transfer.service';

interface Offer {
  id: string,
  token_id: string,
  list_price: {
    address: string,
    amount: string
  },
  contract_addr: string,
  seller: string
};
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  @ViewChild('monsterAddress', { static: true }) monsterAddress: ElementRef;
  @ViewChild('monsterPrice', { static: true }) monsterPrice: ElementRef;
  @ViewChild('offeringId', { static: true }) offeringId: ElementRef;
  balance: string;
  offerings: Offer[];
  txOutput: String;

  constructor(private transferService: TransferService) {
    this.offerings = [];
  }

  ngOnInit(): void {
    this.transferService.getAccount().then((value) => {
      const addr = value.address.toString();
      this.transferService.queryCW20Token(environment.contractAddress20, addr).then((value) => {
        this.balance = value.balance;
      });
      this.getOfferings();
    });
  }

  sell(): void {
    this.transferService.sellMonster(
      environment.contractAddress721,
      environment.contractAddressMarket,
      environment.contractAddress20,
      this.monsterAddress.nativeElement.value,
      this.monsterPrice.nativeElement.value).then((value) => {
        this.monsterAddress.nativeElement.value = "";
        this.monsterPrice.nativeElement.value = "";
        this.txOutput = JSON.stringify(value);
        this.getOfferings();
      }).catch((value) => {
        this.txOutput = JSON.stringify(value);
        console.log('FAIL to sell')
        console.log(JSON.stringify(value))
      });
  }

  withdraw(): void {
    this.transferService.withdrawMonster(
      environment.contractAddressMarket,
      this.offeringId.nativeElement.value
    ).then((value) => {
      this.offeringId.nativeElement.value = "";
      this.txOutput = JSON.stringify(value);
      this.getOfferings();
    }).catch((value) => {
      this.txOutput = JSON.stringify(value);
    });
  }

  getOfferings(): void {
    this.transferService.queryNFTOfferings(environment.contractAddressMarket).then((value) => {
      this.offerings = [];
      const res = JSON.parse(JSON.stringify(value));
      res.offerings.forEach(element => {
        this.offerings.push(element);
      });
    }).catch((value) => {
      console.log('FAIL to get offerings')
      console.log(JSON.stringify(value))
    });
  }

}
