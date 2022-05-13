import { Injectable } from '@nestjs/common';
import Flight from './flight.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class FlightService extends TypeOrmCrudService<Flight> {
  constructor(@InjectRepository(Flight) repo) {
    super(repo);
  }
}
