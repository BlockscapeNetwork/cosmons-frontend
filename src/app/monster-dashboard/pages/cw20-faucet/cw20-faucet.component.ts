import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { TransferService } from '../../services/transfer.service';
import { takeUntil } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cw20-faucet',
  templateUrl: './cw20-faucet.component.html',
  styleUrls: ['./cw20-faucet.component.scss']
})
export class Cw20FaucetComponent implements OnInit, OnDestroy {
  @ViewChild('bechAddress', { static: true }) bechAddress: ElementRef;
  private onDestroy: Subject<boolean> = new Subject<boolean>();
  txOutput: String;
  balance: string;

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.getBalance();
  }
  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  getBalance(): void {
    this.transferService.getAccount().then((value) => {
      const addr = value.address.toString();
      this.transferService.queryCW20Token(environment.contractAddress20, addr).then((value) => {
        this.balance = value.balance;
      });
    });
  }

  requestCW20Token(): void {
    this.transferService.requestCW20Tokens(this.bechAddress.nativeElement.value).pipe(takeUntil(this.onDestroy)).subscribe(
      (res) => {
        this.getBalance();
        this.bechAddress.nativeElement.value = '';
        console.log(JSON.stringify(res));
        this.txOutput = 'success';
      }, (err) => {
        this.getBalance();
        console.log(JSON.stringify(err));
        this.txOutput = 'error';
      }
    );
  }

}
