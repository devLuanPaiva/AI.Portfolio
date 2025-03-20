import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectProvider } from './project.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  providers: [ProjectProvider],
  controllers: [ProjectController],
  imports: [DatabaseModule]
})
export class ProjectModule { }
