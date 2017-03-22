import { TestBed, inject } from '@angular/core/testing';

import { UserprofileService } from './userprofile.service';

describe('UserprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserprofileService]
    });
  });

  it('should ...', inject([UserprofileService], (service: UserprofileService) => {
    expect(service).toBeTruthy();
  }));
});
