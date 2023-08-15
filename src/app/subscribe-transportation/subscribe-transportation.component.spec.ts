import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeTransportationComponent } from './subscribe-transportation.component';

describe('SubscribeTransportationComponent', () => {
  let component: SubscribeTransportationComponent;
  let fixture: ComponentFixture<SubscribeTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribeTransportationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubscribeTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
