import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingpageUIComponent } from './listingpage-ui.component';

describe('ListingpageUIComponent', () => {
  let component: ListingpageUIComponent;
  let fixture: ComponentFixture<ListingpageUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingpageUIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingpageUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
