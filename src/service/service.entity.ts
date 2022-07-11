import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Garage from '../garage/garage.entity';
import Reservation from '../reservation/reservation.entity';

@Entity()
class Service {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public price: string;

  @Column()
  public time: string;

  @Column()
  public description: string;

  @ManyToOne(() => Garage, (garage: Garage) => garage.name)
  public garage: Garage;

  @OneToMany(
    () => Reservation,
    (reservation: Reservation) => reservation.service,
  )
  public reservation: Reservation[];
}

export default Service;
