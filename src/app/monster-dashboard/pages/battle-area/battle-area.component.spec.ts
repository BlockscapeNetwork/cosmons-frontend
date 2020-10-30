import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleAreaComponent } from './battle-area.component';

describe('BattleAreaComponent', () => {
  let component: BattleAreaComponent;
  let fixture: ComponentFixture<BattleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
