import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistractionComponent } from './registraction.component';

describe('RegistractionComponent', () => {
  let component: RegistractionComponent;
  let fixture: ComponentFixture<RegistractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
