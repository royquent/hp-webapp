import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMainComponent } from './list-main.component';

describe('ListMainComponent', () => {
  let component: ListMainComponent;
  let fixture: ComponentFixture<ListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
