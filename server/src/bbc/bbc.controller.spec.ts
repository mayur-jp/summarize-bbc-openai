import { Test, TestingModule } from '@nestjs/testing';
import { BbcController } from './bbc.controller';

describe('BbcController', () => {
  let controller: BbcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BbcController],
    }).compile();

    controller = module.get<BbcController>(BbcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
