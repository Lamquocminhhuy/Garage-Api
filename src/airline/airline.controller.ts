import { Controller, UseGuards } from '@nestjs/common';
import Airline from './airline.entity';
import { AirlineService } from './airline.service';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import CreateAirlineDto from './dto/CreateAirline.dto';
import RoleGuard from '../users/role.guard';
import Role from '../users/roles.enum';

@Crud({
  model: {
    type: Airline,
  },
  dto: {
    create: CreateAirlineDto,
    update: CreateAirlineDto,
    replace: CreateAirlineDto,
  },
  query: {
    join: {
      flights: {
        eager: true,
      },
    },
  },
})
@Controller('airline')
@ApiTags('Airlines')
export class AirlineController {
  constructor(public service: AirlineService) {}

  get base(): CrudController<Airline> {
    return this;
  }

  @UseGuards(RoleGuard(Role.Admin))
  @ApiBody({
    schema: {
      properties: {
        no_of_seats: { type: 'number' },
      },
    },
  })
  @Override()
  createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: Airline) {
    return this.base.createOneBase(req, dto);
  }
}
