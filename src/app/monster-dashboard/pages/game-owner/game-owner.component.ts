import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TransferService } from '../../services/transfer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game-owner',
  templateUrl: './game-owner.component.html',
  styleUrls: ['./game-owner.component.scss']
})
export class GameOwnerComponent implements OnInit {
  @ViewChild('monsterAddress', { static: true }) monsterAddress: ElementRef;
  @ViewChild('monsterName', { static: true }) monsterName: ElementRef;
  @ViewChild('monsterLevel', { static: true }) monsterLevel: ElementRef;
  @ViewChild('monsterDescription', { static: true }) monsterDescription: ElementRef;
  @ViewChild('monsterImage', { static: true }) monsterImage: ElementRef;
  txOutput: String;


  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
  }

  createMonster() {
    this.transferService.mintMonster(
      environment.contractAddress721,
      this.monsterAddress.nativeElement.value,
      this.monsterName.nativeElement.value,
      parseInt(this.monsterLevel.nativeElement.value),
      this.monsterDescription.nativeElement.value,
      null).then((value) => {
        this.txOutput = JSON.stringify(value);
      }).catch((value) => {
        this.txOutput = JSON.stringify(value);
      });
  }
}