import { Test, TestingModule } from '@nestjs/testing';
import { UserOtherTrackingService } from './user_other_tracking.service';

describe('UserOtherTrackingService', () => {
  let service: UserOtherTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserOtherTrackingService],
    }).compile();

    service = module.get<UserOtherTrackingService>(UserOtherTrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
