import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmenttypeComponent } from './departmenttype.component';

describe('DepartmenttypeComponent', () => {
  let component: DepartmenttypeComponent;
  let fixture: ComponentFixture<DepartmenttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmenttypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
