import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUnComponent } from './test-un.component';

describe('TestUnComponent', () => {
  let component: TestUnComponent;
  let fixture: ComponentFixture<TestUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestUnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
