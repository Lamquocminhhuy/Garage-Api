import { Controller, UseGuards } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedRequest,
} from '@nestjsx/crud';
import { FlightService } from './flight.service';
import Flight from './flight.entity';
import { ApiTags } from '@nestjs/swagger';
import RoleGuard from '../users/role.guard';
import Role from '../users/roles.enum';
import CreateFlightDto from './dto/createFlight.dto';

@Crud({
  model: {
    type: Flight,
  },
  dto: {
    create: CreateFlightDto,
    update: CreateFlightDto,
    replace: CreateFlightDto

  },
  query: {
    join: {
      airline: {
        eager: true,
      },
    },
  },
})
@Controller('flight')
@ApiTags('Flight')
export class FlightController implements CrudController<Flight> {
  constructor(public service: FlightService) {}

  get base(): CrudController<Flight> {
    return this;
  }

  @Override()
  @UseGuards(RoleGuard(Role.Admin))
  async deleteOne(@ParsedRequest() req: CrudRequest) {
    return this.base.deleteOneBase(req);
  }
}
