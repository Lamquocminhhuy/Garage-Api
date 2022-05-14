import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Airline from './airline.entity';

@Injectable()
export class AirlineService extends TypeOrmCrudService<Airline> {
  constructor(@InjectRepository(Airline) repo) {
    super(repo);
  }
}
