import { Project } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../database/prisma.provider';

@Injectable()
export class ProjectProvider {
    constructor(private readonly prisma: PrismaProvider) { }
    async getAllProjects(): Promise<Project[]> {
        return await this.prisma.project.findMany() as any;
    }
    async getProjectById(id: number): Promise<Project | null> {
        return await this.prisma.project.findUnique({
            where: { id },
            include: { technologies: true }
        }) as any;
    }
}
