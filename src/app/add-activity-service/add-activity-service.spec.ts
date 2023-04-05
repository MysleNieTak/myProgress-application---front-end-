import {SportActivityService} from "./add-sport-activity.service";
import {TestBed} from "@angular/core/testing";

describe('SportActivityService', () => {
  let service: SportActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
