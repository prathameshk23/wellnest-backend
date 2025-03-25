import { Test, TestingModule } from '@nestjs/testing';
import { SleepTrackingController } from './sleep_tracking.controller';
import { SleepTrackingService } from './sleep_tracking.service';

describe('SleepTrackingController', () => {
  let controller: SleepTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SleepTrackingController],
      providers: [SleepTrackingService],
    }).compile();

    controller = module.get<SleepTrackingController>(SleepTrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
