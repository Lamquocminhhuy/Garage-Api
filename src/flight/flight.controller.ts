import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { FlightService } from './flight.service';
import Flight from './flight.entity';
import { ApiTags } from '@nestjs/swagger';
import { extend } from '@hapi/joi';

@Crud({
  model: {
    type: Flight,
  },
})

@Controller('flight')
@ApiTags('Flight')
export class FlightController implements CrudController<Flight> {
  constructor(public service: FlightService) {}
}
