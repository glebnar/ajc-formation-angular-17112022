import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSelfieComponent } from './new-selfie.component';

describe('NewSelfieComponent', () => {
  let component: NewSelfieComponent;
  let fixture: ComponentFixture<NewSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
