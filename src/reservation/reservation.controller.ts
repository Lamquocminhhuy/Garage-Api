import { Body, Controller, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController, Override } from '@nestjsx/crud';
import JwtAuthenticationGuard from '../authentication/guards/jwt-authentication.guard';
import RequestWithUser from '../authentication/interfaces/requestWithUser.interface';
import CreateReservationDto from './dto/reservation.dto';
import Reservation from './reservation.entity';
import { ReservationService } from './reservation.service';

@ApiTags('Reservations')
@Crud({
  model: {
    type: Reservation,
  },
  query: {
    join: {
      user: {
        eager: true,
      },
      service: { eager: true },
      garage: { eager: true },
    },
  },
})
@Controller('reservation')
export class ReservationController implements CrudController<Reservation> {
  constructor(
    public service: ReservationService,
    private reservationService: ReservationService,
  ) {}

  @Override()
  @UseGuards(JwtAuthenticationGuard)
  createOne(
    @Body() reservation: CreateReservationDto,
    @Req() request: RequestWithUser,
  ) {
    console.log(request.user);
    return this.reservationService.creatReservation(reservation, request.user);
  }
}
