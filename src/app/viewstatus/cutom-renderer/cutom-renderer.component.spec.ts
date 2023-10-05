import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomRendererComponent } from './cutom-renderer.component';

describe('CutomRendererComponent', () => {
  let component: CutomRendererComponent;
  let fixture: ComponentFixture<CutomRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
