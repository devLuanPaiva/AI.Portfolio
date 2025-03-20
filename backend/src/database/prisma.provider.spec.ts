import { Test, TestingModule } from '@nestjs/testing';
import { PrismaProvider } from './prisma.provider';

describe('PrismaProvider', () => {
  let provider: PrismaProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaProvider],
    }).compile();

    provider = module.get<PrismaProvider>(PrismaProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
  it('should call $connect on module init', async () => {
    const connectSpy = jest.spyOn(provider, '$connect').mockResolvedValue(undefined);
    await provider.onModuleInit();
    expect(connectSpy).toHaveBeenCalledTimes(1);
  });
  it('should call $disconnect on module destroy', async () => {
    const disconnectSpy = jest.spyOn(provider, '$disconnect').mockResolvedValue(undefined);
    await provider.onModuleDestroy();
    expect(disconnectSpy).toHaveBeenCalledTimes(1);
  });
});
