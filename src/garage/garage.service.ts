import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import Garage from './garage.entity';

@Injectable()
export class GarageService extends TypeOrmCrudService<Garage> {
  constructor(@InjectRepository(Garage) repo) {
    super(repo);
  }
}
