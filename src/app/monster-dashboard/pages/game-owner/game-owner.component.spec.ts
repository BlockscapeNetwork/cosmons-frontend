import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOwnerComponent } from './game-owner.component';

describe('GameOwnerComponent', () => {
  let component: GameOwnerComponent;
  let fixture: ComponentFixture<GameOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
