import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSelfieComponent } from './row-selfie.component';

describe('RowSelfieComponent', () => {
  let component: RowSelfieComponent;
  let fixture: ComponentFixture<RowSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
