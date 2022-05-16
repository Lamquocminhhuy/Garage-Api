import { Body, Controller, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from '../authentication/requestWithUser.interface';
import CreateReservationDto from './dto/CreateReservation.dto';
import Reservation from './reservation.entity';
import { ReservationService } from './reservation.service';

@Crud({
  model: {
    type: Reservation,
  },
  dto: {
    create: CreateReservationDto,
    update: CreateReservationDto,
    replace: CreateReservationDto,
  },
  query: {
    join: {
      user: {
        eager: true,
      },
      flight: {
        eager: true,
      },
    },
  },
})
@Controller('reservation')
@ApiTags('Reservation')
export class ReservationController implements CrudController<Reservation> {
  constructor(
    public service: ReservationService,
    private reservationService: ReservationService,
  ) {}

  @ApiBody({
    schema: {
      properties: {
        r_date: { type: 'string' },
        total_amount: { type: 'string' },
        class: { type: 'string' },
        flight: { type: 'number' },
    
      },
    },
    examples: {
      a: {
          summary: "Example",
          description: `"r_date": "04/15/2022",
          "total_amount": 1,
          "class": "Business",
          "flight": [{
              "id": 18
          }]`,
   
      }
  }
  })

  
  
  @Override()
  @UseGuards(JwtAuthenticationGuard)
  createOne(
    @Body() reservation: CreateReservationDto,
    @Req() request: RequestWithUser,
  ) {
    return this.reservationService.creatReservation(reservation, request.user);
  }
}
