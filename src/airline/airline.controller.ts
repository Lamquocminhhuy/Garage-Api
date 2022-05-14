import { Controller } from '@nestjs/common';
import Airline from './airline.entity';
import { AirlineService } from './airline.service';
import { Crud, CrudController } from '@nestjsx/crud';
import {ApiTags} from '@nestjs/swagger';
import CreateAirlineDto from './dto/CreateAirline.dto';


@Crud({
    model: {
      type: Airline,
    },
    dto: {
      create: CreateAirlineDto,
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
}
