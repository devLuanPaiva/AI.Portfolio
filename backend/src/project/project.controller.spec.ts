import { Test, TestingModule } from "@nestjs/testing";
import { ProjectController } from "./project.controller";
import { ProjectProvider } from "./project.provider";
import { Project, Type } from "@core";

describe('ProjectController', () => {
    let projectController: ProjectController;
    let projectProvider: ProjectProvider;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProjectController],
            providers: [
                {
                    provide: ProjectProvider,
                    useValue: {
                        getAllProjects: jest.fn(),
                        getProjectById: jest.fn(),
                    },
                },
            ],
        }).compile();

        projectController = module.get<ProjectController>(ProjectController);
        projectProvider = module.get<ProjectProvider>(ProjectProvider);
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

        jest.spyOn(projectProvider, 'getProjectById').mockResolvedValue(mockProject);

        const project = await projectController.getProjectById(1);
        expect(project).toEqual(mockProject);
        expect(projectProvider.getProjectById).toHaveBeenCalledWith(1);
    });
})