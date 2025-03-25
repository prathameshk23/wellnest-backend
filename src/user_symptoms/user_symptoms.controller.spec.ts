import { Test, TestingModule } from '@nestjs/testing';
import { UserSymptomsController } from './user_symptoms.controller';
import { UserSymptomsService } from './user_symptoms.service';

describe('UserSymptomsController', () => {
  let controller: UserSymptomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSymptomsController],
      providers: [UserSymptomsService],
    }).compile();

    controller = module.get<UserSymptomsController>(UserSymptomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
