import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import Garage from './garage.entity';
import { GarageService } from './garage.service';

@ApiTags('Garages')
@Crud({
  model: {
    type: Garage,
  },
  query: {
    join: {
      service: {
        eager: true,
      },
    },
  },
})
@Controller('garage')
export class GarageController implements CrudController<Garage> {
  constructor(public service: GarageService) {}
}
