import { Controller, Get } from '@nestjs/common';
import { TechnologyProvider } from './technology.provider';
import { Technology } from '@core';

@Controller('technology')
export class TechnologyController {
    constructor(private readonly repo: TechnologyProvider) { }
    @Get()
    getAllTechnologies(): Promise<Technology[]> {
        return this.repo.getAllTechnologies()
    }
    @Get('highlighted')
    getHighlightedTechnologies(): Promise<Technology[]> {
        return this.repo.gethighlighted()
    }
}
