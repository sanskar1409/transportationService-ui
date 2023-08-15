import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransportationComponent } from './search-transportation.component';

describe('SearchTransportationComponent', () => {
  let component: SearchTransportationComponent;
  let fixture: ComponentFixture<SearchTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchTransportationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
