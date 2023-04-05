import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreNavigatorComponent } from './core-navigator.component';

describe('CoreNavigatorComponent', () => {
  let component: CoreNavigatorComponent;
  let fixture: ComponentFixture<CoreNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
