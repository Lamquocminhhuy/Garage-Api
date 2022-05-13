import { Body, Controller, Post } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import User from './user.entity';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';


@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
@ApiTags('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService,
    private readonly usersService: UsersService) {
    
  }

  // @Post('test')
  // async register(@Body() registrationData: createUserDto) {
  //   return this.usersService.create(registrationData);
  // }
}
