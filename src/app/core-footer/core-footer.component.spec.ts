import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreFooterComponent} from './core-footer.component';

describe('CoreFooterComponent', () => {
  let component: CoreFooterComponent;
  let fixture: ComponentFixture<CoreFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreFooterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
