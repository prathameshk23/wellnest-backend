import { Test, TestingModule } from '@nestjs/testing';
import { UserSymptomsService } from './user_symptoms.service';

describe('UserSymptomsService', () => {
  let service: UserSymptomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSymptomsService],
    }).compile();

    service = module.get<UserSymptomsService>(UserSymptomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
