import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseComponentComponent } from './firebase-component.component';

describe('FirebaseComponentComponent', () => {
  let component: FirebaseComponentComponent;
  let fixture: ComponentFixture<FirebaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
