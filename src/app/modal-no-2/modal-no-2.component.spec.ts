import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNo2Component } from './modal-no-2.component';

describe('ModalNo2Component', () => {
  let component: ModalNo2Component;
  let fixture: ComponentFixture<ModalNo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
