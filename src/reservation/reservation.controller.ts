import { Body, Controller, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController, Override, ParsedRequest } from '@nestjsx/crud';
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
  dto: { create: CreateReservationDto },
  query: {
    join: {
      user: {
        eager: true,
      },
      service: { eager: true },
      garage: { eager: true },
      status: { eager: true },
    },
  },
})
// @UseGuards(JwtAuthenticationGuard)
@Controller('reservation')
export class ReservationController implements CrudController<Reservation> {
  constructor(
    public service: ReservationService,
    private reservationService: ReservationService,
  ) {}

  @Override()
  createOne(
    @Body() reservation: CreateReservationDto,
    // @Req() request: RequestWithUser,
  ) {
    return this.reservationService.creatReservation(
      reservation,
      // request.user.id,
    );
  }
}
