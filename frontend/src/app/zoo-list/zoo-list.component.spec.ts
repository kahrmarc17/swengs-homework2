import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooListComponent } from './zoo-list.component';

describe('ZooListComponent', () => {
  let component: ZooListComponent;
  let fixture: ComponentFixture<ZooListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZooListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZooListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
