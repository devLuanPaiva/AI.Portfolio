import { Test, TestingModule } from '@nestjs/testing';
import { ProjectProvider } from './project.provider';

describe('ProjectProvider', () => {
  let provider: ProjectProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectProvider],
    }).compile();

    provider = module.get<ProjectProvider>(ProjectProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
