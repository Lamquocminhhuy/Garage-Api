import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import Reservation from './reservation.entity';
import CreateReservationDto from './dto/CreateReservation.dto';



@Injectable()
export class ReservationService extends TypeOrmCrudService<Reservation> {
  constructor(
    @InjectRepository(Reservation) repo,
 
  ) {
    super(repo);
  }

  public async creatReservation(reservation: CreateReservationDto, user) {
    console.log(user)
    const newReservation = await this.repo.create({
      ...reservation,
      user: user,
    });

    let createReservation = await this.repo.save(newReservation);
    return createReservation;
  }
}
