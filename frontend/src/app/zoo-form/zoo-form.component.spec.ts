import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooFormComponent } from './zoo-form.component';

describe('ZooFormComponent', () => {
  let component: ZooFormComponent;
  let fixture: ComponentFixture<ZooFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZooFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZooFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
