import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreMainComponent} from './core-main.component';

describe('CoreMainComponent', () => {
  let component: CoreMainComponent;
  let fixture: ComponentFixture<CoreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreMainComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
