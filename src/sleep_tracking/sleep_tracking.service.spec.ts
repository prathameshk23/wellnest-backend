import { Test, TestingModule } from '@nestjs/testing';
import { SleepTrackingService } from './sleep_tracking.service';

describe('SleepTrackingService', () => {
  let service: SleepTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SleepTrackingService],
    }).compile();

    service = module.get<SleepTrackingService>(SleepTrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
