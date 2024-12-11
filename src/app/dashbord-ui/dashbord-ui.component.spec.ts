import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordUIComponent } from './dashbord-ui.component';

describe('DashbordUIComponent', () => {
  let component: DashbordUIComponent;
  let fixture: ComponentFixture<DashbordUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordUIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
