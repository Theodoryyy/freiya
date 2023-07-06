import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingsComponent } from './streamings.component';

describe('StreamingsComponent', () => {
  let component: StreamingsComponent;
  let fixture: ComponentFixture<StreamingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
