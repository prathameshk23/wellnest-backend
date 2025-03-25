import { Test, TestingModule } from '@nestjs/testing';
import { MoodTrackingController } from './mood_tracking.controller';
import { MoodTrackingService } from './mood_tracking.service';

describe('MoodTrackingController', () => {
  let controller: MoodTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoodTrackingController],
      providers: [MoodTrackingService],
    }).compile();

    controller = module.get<MoodTrackingController>(MoodTrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
