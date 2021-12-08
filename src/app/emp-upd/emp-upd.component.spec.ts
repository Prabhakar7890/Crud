import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUpdComponent } from './emp-upd.component';

describe('EmpUpdComponent', () => {
  let component: EmpUpdComponent;
  let fixture: ComponentFixture<EmpUpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpUpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpUpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
