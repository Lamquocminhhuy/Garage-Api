import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ServiceService } from './service.service';
import Service from './service.entity';
import { ServiceDto } from './dto/create-service-dto';
import JwtAuthenticationGuard from 'src/authentication/guards/jwt-authentication.guard';

@ApiTags('Services')
@Crud({
  model: {
    type: Service,
  },
  dto: {
    create: ServiceDto,
  },
  query: {
    join: {
      garage: {
        eager: true,
      },
    },
  },
})
// @UseGuards(JwtAuthenticationGuard)
@Controller('service')
export class ServiceController implements CrudController<Service> {
  constructor(public service: ServiceService) {}
}
