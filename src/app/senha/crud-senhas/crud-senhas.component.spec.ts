import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSenhasComponent } from './crud-senhas.component';

describe('CrudSenhasComponent', () => {
  let component: CrudSenhasComponent;
  let fixture: ComponentFixture<CrudSenhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudSenhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSenhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
