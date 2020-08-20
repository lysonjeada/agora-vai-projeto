import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudasComponent } from './ajudas.component';

describe('AjudasComponent', () => {
  let component: AjudasComponent;
  let fixture: ComponentFixture<AjudasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjudasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
