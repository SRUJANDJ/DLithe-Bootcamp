import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtestComponent } from './ngtest.component';

describe('NgtestComponent', () => {
  let component: NgtestComponent;
  let fixture: ComponentFixture<NgtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
