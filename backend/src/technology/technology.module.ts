import { Module } from '@nestjs/common';
import { TechnologyController } from './technology.controller';
import { TechnologyProvider } from './technology.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [TechnologyController],
  providers: [TechnologyProvider],
  imports: [DatabaseModule]
})
export class TechnologyModule { }
