import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Flight from '../flight/flight.entity';
import User from '../users/user.entity';

@Entity()
class Reservation {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'date' })
  public r_date: string;

  @Column()
  public total_amount: number;

  @Column()
  public class: string;

  @OneToMany(() => Flight, (flight: Flight) => flight.reservation)
  public flight: Flight[];

  @ManyToMany(() => User, (user: User) => user.reservation)
  @JoinTable()
  public user: User[];
}

export default Reservation;
