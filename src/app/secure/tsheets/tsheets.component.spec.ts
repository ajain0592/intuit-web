import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsheetsComponent } from './tsheets.component';

describe('TsheetsComponent', () => {
  let component: TsheetsComponent;
  let fixture: ComponentFixture<TsheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
