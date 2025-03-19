import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProjectModule } from './project/project.module';
import { TechnologyModule } from './technology/technology.module';

@Module({
  imports: [DatabaseModule, ProjectModule, TechnologyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
