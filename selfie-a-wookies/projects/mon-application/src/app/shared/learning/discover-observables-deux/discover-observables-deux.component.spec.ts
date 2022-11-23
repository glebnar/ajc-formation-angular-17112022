import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverObservablesDeuxComponent } from './discover-observables-deux.component';

describe('DiscoverObservablesDeuxComponent', () => {
  let component: DiscoverObservablesDeuxComponent;
  let fixture: ComponentFixture<DiscoverObservablesDeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DiscoverObservablesDeuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverObservablesDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
