import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Service from '../service/service.entity';

import User from '../users/user.entity';

@Entity()
class Reservation {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'date' })
  public r_date: string;

  @Column({ type: 'time' })
  public r_time: string;

  @ManyToOne(() => Service, (service: Service) => service.reservation)
  public service: Service;

  @ManyToOne(() => User, (user: User) => user.reservation)
  public user: User;
}

export default Reservation;
