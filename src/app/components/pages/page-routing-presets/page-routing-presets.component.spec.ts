import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRoutingPresetsComponent } from './page-routing-presets.component';

describe('PageRoutingPresetsComponent', () => {
  let component: PageRoutingPresetsComponent;
  let fixture: ComponentFixture<PageRoutingPresetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRoutingPresetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRoutingPresetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
