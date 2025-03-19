import { Test, TestingModule } from '@nestjs/testing';
import { TechnologyProvider } from './technology.provider';

describe('TechnologyProvider', () => {
  let provider: TechnologyProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnologyProvider],
    }).compile();

    provider = module.get<TechnologyProvider>(TechnologyProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
