import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cod404Component } from './cod404.component';

describe('Cod404Component', () => {
  let component: Cod404Component;
  let fixture: ComponentFixture<Cod404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cod404Component]
    });
    fixture = TestBed.createComponent(Cod404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
