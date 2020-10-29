import { Component, Input, OnInit } from '@angular/core';
import { MonsterInfo } from '../../pages/monster-dashboard/monster-dashboard.component'

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {
  @Input() monsterInfo: MonsterInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
