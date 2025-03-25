import { Test, TestingModule } from '@nestjs/testing';
import { SymptomsTrackingService } from './symptoms_tracking.service';

describe('SymptomsTrackingService', () => {
  let service: SymptomsTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SymptomsTrackingService],
    }).compile();

    service = module.get<SymptomsTrackingService>(SymptomsTrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
