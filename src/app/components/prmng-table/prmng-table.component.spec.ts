import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmngTableComponent } from './prmng-table.component';

describe('PrmngTableComponent', () => {
  let component: PrmngTableComponent;
  let fixture: ComponentFixture<PrmngTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmngTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrmngTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
