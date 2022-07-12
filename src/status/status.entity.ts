import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Reservation from '../reservation/reservation.entity';

@Entity()
class Status {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public status: string;

  @OneToMany(
    () => Reservation,
    (reservation: Reservation) => reservation.service,
  )
  public reservation: Reservation[];
}

export default Status;
