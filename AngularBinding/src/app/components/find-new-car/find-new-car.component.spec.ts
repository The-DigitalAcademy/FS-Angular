import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNewCarComponent } from './find-new-car.component';

describe('FindNewCarComponent', () => {
  let component: FindNewCarComponent;
  let fixture: ComponentFixture<FindNewCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindNewCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindNewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
