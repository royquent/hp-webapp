import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseColoredLineComponent } from './house-colored-line.component';

describe('HouseColoredLineComponent', () => {
  let component: HouseColoredLineComponent;
  let fixture: ComponentFixture<HouseColoredLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseColoredLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseColoredLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
