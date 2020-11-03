import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cw20FaucetComponent } from './cw20-faucet.component';

describe('Cw20FaucetComponent', () => {
  let component: Cw20FaucetComponent;
  let fixture: ComponentFixture<Cw20FaucetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cw20FaucetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cw20FaucetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
