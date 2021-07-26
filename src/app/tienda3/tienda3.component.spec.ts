import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tienda3Component } from './tienda3.component';

describe('Tienda3Component', () => {
  let component: Tienda3Component;
  let fixture: ComponentFixture<Tienda3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tienda3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tienda3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
