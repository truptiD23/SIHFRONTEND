import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdictorComponent } from './perdictor.component';

describe('PerdictorComponent', () => {
  let component: PerdictorComponent;
  let fixture: ComponentFixture<PerdictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerdictorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerdictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
