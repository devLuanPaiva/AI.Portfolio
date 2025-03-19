import { Test, TestingModule } from '@nestjs/testing';
import { TechnologyController } from './technology.controller';

describe('TechnologyController', () => {
  let controller: TechnologyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnologyController],
    }).compile();

    controller = module.get<TechnologyController>(TechnologyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
