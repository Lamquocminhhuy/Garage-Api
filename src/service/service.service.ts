import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import Service from './service.entity';

@Injectable()
export class ServiceService extends TypeOrmCrudService<Service> {
  constructor(@InjectRepository(Service) repo) {
    super(repo);
  }
}
