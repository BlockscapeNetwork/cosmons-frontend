import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-game-owner',
  templateUrl: './game-owner.component.html',
  styleUrls: ['./game-owner.component.scss']
})
export class GameOwnerComponent implements OnInit {

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
  }

  createMonster() {
    this.transferService.mintMonster("cosmos1pgvk0pzmmrz5syz3dxxfav39pe8h5unxdrx5e0", "monster112a9lf34atqv3ejqe22xnna8x4mfqd32tkq2k23wcjywsarcsa", "Lakeuin", 303, "The Lakeuin is the coolest of the six original and distinct spitz breeds of monster from Neptun.", null);
  }

}
