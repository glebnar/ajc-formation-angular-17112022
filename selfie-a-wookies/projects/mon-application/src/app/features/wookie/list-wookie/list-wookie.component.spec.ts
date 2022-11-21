import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWookieComponent } from './list-wookie.component';

describe('ListWookieComponent', () => {
  let component: ListWookieComponent;
  let fixture: ComponentFixture<ListWookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWookieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
