import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSystemInfoComponent } from './get-system-info.component';

describe('GetSystemInfoComponent', () => {
  let component: GetSystemInfoComponent;
  let fixture: ComponentFixture<GetSystemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSystemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSystemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
