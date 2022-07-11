import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import User from './user.entity';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import Role from './roles.enum';
// import RoleGuard from './role.guard';
import CreateUserDto from './dto/createUser.dto';

@Crud({
  model: {
    type: User,
  },

  dto: {
    create: CreateUserDto,
    update: CreateUserDto,
    replace: CreateUserDto,
  },
  query: {
    join: {
      reservation: {
        eager: true,
      },
    },
  },
})
// @UseGuards(RoleGuard(Role.Admin))
@Controller('users')
@ApiTags('Users')
export class UsersController implements CrudController<User> {
  constructor(
    public service: UsersService,
    private readonly usersService: UsersService,
  ) {}
}
