import { Module } from '@nestjs/common';
import { BbcService } from './bbc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bbc } from './entities/bbc.entity';
import { BbcController } from './bbc.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bbc])],
  providers: [BbcService],
  exports: [BbcService],
  controllers: [BbcController],
})
export class BbcModule {}
