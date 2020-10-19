import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsStripComponent } from './models-strip.component';

describe('ModelsStripComponent', () => {
  let component: ModelsStripComponent;
  let fixture: ComponentFixture<ModelsStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
