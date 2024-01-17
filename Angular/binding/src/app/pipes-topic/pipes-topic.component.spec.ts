import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTopicComponent } from './pipes-topic.component';

describe('PipesTopicComponent', () => {
  let component: PipesTopicComponent;
  let fixture: ComponentFixture<PipesTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
