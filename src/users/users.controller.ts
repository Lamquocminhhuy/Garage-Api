import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import User from './user.entity';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import Role from './roles.enum';
import RoleGuard from './role.guard';


@Crud({
  model: {
    type: User,
  },
})
@UseGuards(RoleGuard(Role.Admin))
@Controller('users')
@ApiTags('Users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService,
    private readonly usersService: UsersService) {
    
  }

  // @Post('test')
  // async register(@Body() registrationData: createUserDto) {
  //   return this.usersService.create(registrationData);
  // }
}
