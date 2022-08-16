import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBidderComponent } from './register-bidder.component';

describe('RegisterBidderComponent', () => {
  let component: RegisterBidderComponent;
  let fixture: ComponentFixture<RegisterBidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBidderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
