import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDashboardComponent } from './monster-dashboard.component';

describe('MonsterDashboardComponent', () => {
  let component: MonsterDashboardComponent;
  let fixture: ComponentFixture<MonsterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
