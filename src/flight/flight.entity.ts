import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Airline from '../airline/airline.entity';
import Reservation from '../reservation/reservation.entity';

@Entity()
class Flight {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'date' })
  public flight_deptr_date: string;

  @Column()
  public deptr_country: string;

  @Column()
  public dest_country: string;

  @Column({ type: 'time' })
  public deptr_time: string;

  @Column({ type: 'time' })
  public arrival_time: string;

  @ManyToOne(() => Airline, (airline: Airline) => airline.id)
  public airline: Airline;

  @ManyToOne(
    () => Reservation,
    (reservation: Reservation) => reservation.flight,
  )
  public reservation: Reservation;
}

export default Flight;
