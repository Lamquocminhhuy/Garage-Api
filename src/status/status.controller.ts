import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import Status from './status.entity';
import { StatusService } from './status.service';

@ApiTags('Status')
@Crud({
  model: {
    type: Status,
  },
})
@Controller('status')
export class StatusController implements CrudController<Status> {
  constructor(public service: StatusService) {}
}
