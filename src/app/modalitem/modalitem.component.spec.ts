import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalitemComponent } from './modalitem.component';

describe('ModalitemComponent', () => {
  let component: ModalitemComponent;
  let fixture: ComponentFixture<ModalitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
