import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-battle-area',
  templateUrl: './battle-area.component.html',
  styleUrls: ['./battle-area.component.scss']
})
export class BattleAreaComponent implements OnInit {
  @ViewChild('monsterAttAddress', { static: true }) monsterAttAddress: ElementRef;
  @ViewChild('monsterDefAddress', { static: true }) monsterDefAddress: ElementRef;
  txOutput: String;

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
  }

  battle() {
    this.transferService.battleMonster(
      environment.contractAddress721,
      this.monsterAttAddress.nativeElement.value,
      this.monsterDefAddress.nativeElement.value,
    ).then((value) => {
      this.txOutput = JSON.stringify(value);
    }).catch((value) => {
      this.txOutput = JSON.stringify(value);
    });
  }
}
