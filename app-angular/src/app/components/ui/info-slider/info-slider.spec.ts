import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSlider } from './info-slider';

describe('InfoSlider', () => {
  let component: InfoSlider;
  let fixture: ComponentFixture<InfoSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
