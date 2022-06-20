import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ServiceService } from './service.service';
import Service from './service.entity';

@ApiTags('Services')
@Crud({
  model: {
    type: Service,
  },
  query: {
    join: {
      garage: {
        eager: true,
      },
      service: {
        eager: true,
      },
    },
  },
})
@Controller('service')
export class ServiceController implements CrudController<Service> {
  constructor(public service: ServiceService) {}
}
