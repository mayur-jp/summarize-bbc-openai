import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BbcDTO } from './dto/create-bbc.dto';
import { Bbc } from './entities/bbc.entity';

// This should be a real class/interface representing a bbc entity
// export type Bbc = any;

@Injectable()
export class BbcService {
  constructor(@InjectRepository(Bbc) private readonly bbcRepository: Repository<Bbc>) {}

  create(createBbcDto: BbcDTO): Promise<Bbc> {
    const bbc = new Bbc();

    bbc.title = createBbcDto.title;
    bbc.description = createBbcDto.description;

    return this.bbcRepository.save(bbc);
  }

  async findAll(): Promise<Bbc[]> {
    return this.bbcRepository.find();
  }

  findOne(id: number): Promise<Bbc> {
    return this.bbcRepository.findOne({
      where: {
        id
      }
    });
  }

  async remove(id: number): Promise<void> {
    await this.bbcRepository.delete(id);
  }
}
