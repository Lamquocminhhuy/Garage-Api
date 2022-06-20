import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import CreateReservationDto from './dto/reservation.dto';
import Reservation from './reservation.entity';

@Injectable()
export class ReservationService extends TypeOrmCrudService<Reservation> {
  constructor(@InjectRepository(Reservation) repo) {
    super(repo);
  }

  public async creatReservation(reservation: CreateReservationDto, user) {
    console.log(user);
    console.log(reservation);
    const newReservation = await this.repo.create({
      ...reservation,
      user: user.id,
    });

    let createReservation = await this.repo.save(newReservation);
    return createReservation;
  }
}
