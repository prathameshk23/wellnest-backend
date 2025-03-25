import { Test, TestingModule } from '@nestjs/testing';
import { SymptomsTrackingController } from './symptoms_tracking.controller';
import { SymptomsTrackingService } from './symptoms_tracking.service';

describe('SymptomsTrackingController', () => {
  let controller: SymptomsTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SymptomsTrackingController],
      providers: [SymptomsTrackingService],
    }).compile();

    controller = module.get<SymptomsTrackingController>(SymptomsTrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
