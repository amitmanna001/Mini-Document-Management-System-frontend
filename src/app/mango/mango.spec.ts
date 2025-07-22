import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mango } from './mango';

describe('Mango', () => {
  let component: Mango;
  let fixture: ComponentFixture<Mango>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mango]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mango);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
