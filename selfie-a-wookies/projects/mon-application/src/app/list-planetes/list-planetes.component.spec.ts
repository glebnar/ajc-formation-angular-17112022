import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanetesComponent } from './list-planetes.component';

describe('ListPlanetesComponent', () => {
  let component: ListPlanetesComponent;
  let fixture: ComponentFixture<ListPlanetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlanetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
