import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SportActivityListComponent} from './sport-activity-list.component';

describe('SportActivityListComponent', () => {
  let component: SportActivityListComponent;
  let fixture: ComponentFixture<SportActivityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportActivityListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SportActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
