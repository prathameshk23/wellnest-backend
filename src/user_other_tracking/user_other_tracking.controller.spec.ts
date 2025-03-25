import { Test, TestingModule } from '@nestjs/testing';
import { UserOtherTrackingController } from './user_other_tracking.controller';
import { UserOtherTrackingService } from './user_other_tracking.service';

describe('UserOtherTrackingController', () => {
  let controller: UserOtherTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserOtherTrackingController],
      providers: [UserOtherTrackingService],
    }).compile();

    controller = module.get<UserOtherTrackingController>(UserOtherTrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
