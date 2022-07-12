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

  public async creatReservation(reservation: CreateReservationDto) {
    const newReservation = await this.repo.create({
      ...reservation,
    });

    let createReservation = await this.repo.save(newReservation);
    return createReservation;
  }
}
