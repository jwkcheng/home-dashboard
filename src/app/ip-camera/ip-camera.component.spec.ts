import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCameraComponent } from './ip-camera.component';

describe('IpCameraComponent', () => {
  let component: IpCameraComponent;
  let fixture: ComponentFixture<IpCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
