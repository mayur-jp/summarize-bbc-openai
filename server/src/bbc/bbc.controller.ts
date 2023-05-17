import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BbcDTO } from './dto/create-bbc.dto';
import { BbcService } from './bbc.service';

@Controller('bbcs')
export class BbcController {
    constructor(private readonly bbcService: BbcService) { }
    @Get()
    async findAll() {
        return await this.bbcService.findAll();
    }

    @Get(":id")
    async findOne(@Param("id") id: number) {
        return await this.bbcService.findOne(id);
    }

    @Post()
    async create(@Body() bbcCreateDto: BbcDTO) {
        return await this.bbcService.create(bbcCreateDto);
    }
}