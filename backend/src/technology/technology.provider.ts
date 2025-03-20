import { Technology } from "@core"
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../database/prisma.provider';

@Injectable()
export class TechnologyProvider {
    constructor(private readonly prisma: PrismaProvider) { }
    async getAllTechnologies(): Promise<Technology[]> {
        return this.prisma.technology.findMany();
    }

    async gethighlighted(): Promise<Technology[]> {
        return this.prisma.technology.findMany({
            where: {
                highlighted: true
            }
        });
    }
}
