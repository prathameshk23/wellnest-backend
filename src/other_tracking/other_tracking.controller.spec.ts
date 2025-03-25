import { Test, TestingModule } from '@nestjs/testing';
import { OtherTrackingController } from './other_tracking.controller';
import { OtherTrackingService } from './other_tracking.service';

describe('OtherTrackingController', () => {
  let controller: OtherTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtherTrackingController],
      providers: [OtherTrackingService],
    }).compile();

    controller = module.get<OtherTrackingController>(OtherTrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
