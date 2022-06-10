import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidenav01Component } from './sidenav01.component';

describe('Sidenav01Component', () => {
  let component: Sidenav01Component;
  let fixture: ComponentFixture<Sidenav01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sidenav01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidenav01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
