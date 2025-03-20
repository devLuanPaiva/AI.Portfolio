import { Controller, Get, Param } from '@nestjs/common';
import { ProjectProvider } from './project.provider';
import { Project } from '@core';

@Controller('project')
export class ProjectController {
    constructor(private readonly repo: ProjectProvider) { }
    @Get()
    getAllProjects(): Promise<Project[]> {
        return this.repo.getAllProjects();
    }
    @Get(':id')
    getProjectById(@Param('id') id: number): Promise<Project | null> {
        return this.repo.getProjectById(id);
    }
}
