import { Test, TestingModule } from "@nestjs/testing";
import { PrismaProvider } from "../database/prisma.provider";
import { ProjectProvider } from "./project.provider";
import { Project, Type } from "@core";

describe('ProjectProvider', () => {
    let projectProvider: ProjectProvider;
    let prismaProvider: PrismaProvider;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProjectProvider,
                {
                    provide: PrismaProvider,
                    useValue: {
                        project: {
                            findMany: jest.fn(),
                            findUnique: jest.fn(),
                        },
                    },
                },
            ],
        }).compile();

        projectProvider = module.get<ProjectProvider>(ProjectProvider);
        prismaProvider = module.get<PrismaProvider>(PrismaProvider);
    });
    it('should return all projects', async () => {
        const mockProjects: Project[] = [
            {
                id: 1,
                name: 'Project 1',
                description: 'Description 1',
                images: ['img1.jpg'],
                level: 1,
                type: 'web' as Type.WEB,
                highlighted: false,
                repository: 'repo1',
                technologies: [],
            },
        ];

        jest.spyOn(prismaProvider.project, 'findMany').mockResolvedValue(mockProjects);

        const projects = await projectProvider.getAllProjects();
        expect(projects).toEqual(mockProjects);
        expect(prismaProvider.project.findMany).toHaveBeenCalledTimes(1);
    });
    it('should return a project by ID', async () => {
        const mockProject: Project = {
            id: 1,
            name: 'Project 1',
            description: 'Description 1',
            images: ['img1.jpg'],
            level: 1,
            type: 'web' as Type.WEB,
            highlighted: false,
            repository: 'repo1',
            technologies: [],
        };

        jest.spyOn(prismaProvider.project, 'findUnique').mockResolvedValue(mockProject);

        const project = await projectProvider.getProjectById(1);
        expect(project).toEqual(mockProject);
        expect(prismaProvider.project.findUnique).toHaveBeenCalledWith({
            where: { id: 1 },
            include: { technologies: true },
        });
    });
    it('should return null if project not found', async () => {
        jest.spyOn(prismaProvider.project, 'findUnique').mockResolvedValue(null);

        const project = await projectProvider.getProjectById(99);
        expect(project).toBeNull();
        expect(prismaProvider.project.findUnique).toHaveBeenCalledWith({
            where: { id: 99 },
            include: { technologies: true },
        });
    });
})