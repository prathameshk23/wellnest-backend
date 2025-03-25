import { Test, TestingModule } from '@nestjs/testing';
import { OtherTrackingService } from './other_tracking.service';

describe('OtherTrackingService', () => {
  let service: OtherTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtherTrackingService],
    }).compile();

    service = module.get<OtherTrackingService>(OtherTrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
