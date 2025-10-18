import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModalDetail } from './movie-modal-detail';

describe('MovieModalDetail', () => {
  let component: MovieModalDetail;
  let fixture: ComponentFixture<MovieModalDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieModalDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieModalDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
