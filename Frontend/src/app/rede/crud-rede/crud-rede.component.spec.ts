import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRedeComponent } from './crud-rede.component';

describe('CrudRedeComponent', () => {
  let component: CrudRedeComponent;
  let fixture: ComponentFixture<CrudRedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudRedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
