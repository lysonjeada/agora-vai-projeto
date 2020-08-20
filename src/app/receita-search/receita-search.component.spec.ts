import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaSearchComponent } from './receita-search.component';

describe('ReceitaSearchComponent', () => {
  let component: ReceitaSearchComponent;
  let fixture: ComponentFixture<ReceitaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
