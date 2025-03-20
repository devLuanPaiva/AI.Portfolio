import { PrismaProvider } from "../database/prisma.provider";
import { TechnologyProvider } from "./technology.provider";
import { Test, TestingModule } from "@nestjs/testing";
import { Technology } from "@core";

describe('TechnologyProvider', () => {
    let technologyProvider: TechnologyProvider;
    let prismaProvider: PrismaProvider;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TechnologyProvider,
                {
                    provide: PrismaProvider,
                    useValue: {
                        technology: {
                            findMany: jest.fn(),
                        },
                    },
                },
            ],
        }).compile();

        technologyProvider = module.get<TechnologyProvider>(TechnologyProvider);
        prismaProvider = module.get<PrismaProvider>(PrismaProvider);
    });
    it('should return all technologies', async () => {
        const mockTechnologies: Technology[] = [
            {
                id: 1,
                name: 'Tech 1',
                description: 'Description 1',
                image: 'img1.jpg',
                highlighted: false,
            },
        ];

        jest.spyOn(prismaProvider.technology, 'findMany').mockResolvedValue(mockTechnologies);

        const technologies = await technologyProvider.getAllTechnologies();
        expect(technologies).toEqual(mockTechnologies);
        expect(prismaProvider.technology.findMany).toHaveBeenCalledTimes(1);
    });
    it('should return highlighted technologies', async () => {
        const mockHighlightedTechnologies: Technology[] = [
            {
                id: 2,
                name: 'Tech 2',
                description: 'Description 2',
                image: 'img2.jpg',
                highlighted: true,
            },
        ];

        jest.spyOn(prismaProvider.technology, 'findMany').mockResolvedValue(mockHighlightedTechnologies);

        const technologies = await technologyProvider.gethighlighted();
        expect(technologies).toEqual(mockHighlightedTechnologies);
        expect(prismaProvider.technology.findMany).toHaveBeenCalledWith({
            where: { highlighted: true },
        });
    });
})