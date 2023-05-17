import { Test, TestingModule } from '@nestjs/testing';
import { BbcService } from './bbc.service';

describe('BbcService', () => {
  let service: BbcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BbcService],
    }).compile();

    service = module.get<BbcService>(BbcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
