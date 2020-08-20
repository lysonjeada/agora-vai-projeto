import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaDetailComponent } from './receita-detail.component';

describe('ReceitaDetailComponent', () => {
  let component: ReceitaDetailComponent;
  let fixture: ComponentFixture<ReceitaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
