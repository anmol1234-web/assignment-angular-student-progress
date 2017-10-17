import { TestBed, inject } from '@angular/core/testing';

import { StudentProgressService } from './student-progress.service';

describe('StudentProgressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentProgressService]
    });
  });

  it('should be created', inject([StudentProgressService], (service: StudentProgressService) => {
    expect(service).toBeTruthy();
  }));
});
