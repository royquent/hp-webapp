import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharPictureHouseComponent } from './char-picture-house.component';

describe('CharPictureHouseComponent', () => {
  let component: CharPictureHouseComponent;
  let fixture: ComponentFixture<CharPictureHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharPictureHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharPictureHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
